import { Component } from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import UserService from "./components/services/UserService";
import { useLocation } from 'react-router-dom'

var authenticationService = new UserService();
class App extends Component {

  constructor(){
    super();
    this.state = {
      searchPlace:'',
      login:false,
      register:false,
      loggedIn:'',
      settings:false,
      notice:{
        noticeDelete:false,
        noticeRegister:false,
        message:''
      },
      searchUser:{
        value:'',
        view:false,
        editUser:false
      }
    }
    this.search = this.search.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getLoggedUser=this.getLoggedUser.bind(this);
    this.logout=this.logout.bind(this);
    this.setSettings=this.setSettings.bind(this);
    this.setNotice = this.setNotice.bind(this);
    this.setSearchUser = this.setSearchUser.bind(this);
  }

  componentDidMount(){
    this.getLoggedUser();
  }

  setSettings(value){
    this.setState({
      settings:value,
      register:value
    })
  }

  setSearchUser(stringSearch,isView,edit){
    this.setState({
      searchUser:{
        value:stringSearch,
        view:isView,
        editUser:edit
      }
    })
  }

  setNotice(name,val,mess){
    this.setState({
        notice:{
          [name]:val,
          message:mess
        }
    })
}

  search(searchPlace){
    if(this.state.searchUser.view){
      this.setSearchUser(searchPlace,true,false)
    }else{
      localStorage.setItem('searchPlace',searchPlace);
      this.setState({searchPlace:searchPlace})
    }
  }

  keyUp(event){
    if(event.keyCode==13){
      this.search(event.target.value)
    }
  }

  handleClick(event){
    const id = event.target.id;
    if(id===''){
      this.setState({
        login:false,
        register:false,
        settings:false
      })
    }
		this.setState(prevState => {
      if(id.toLowerCase().includes('login')){
        const updateState=!prevState.login
        return{
          login:updateState
        }
      }else if(id.toLowerCase().includes('register')){
        const updateState=!prevState.register
        return{
          register:updateState
        }
      }
		})
  }

  async getLoggedUser(){
    await authenticationService.getLoggedUser().then(res => 
        {   
            this.setState({
              loggedIn:res,
              loggedUser:res.username,
              searchPlace:res.lastSearchPlace
            })
            if(res.id===0){
              authenticationService.logout();
            }
        }
    );
  }

  logout(){
    authenticationService.logout();
    this.getLoggedUser();
  }

  render(){
    return (
      <div className="container">
        <Router>
          <Header 
            search = {this.search}
            searchUser = {this.state.searchUser.view}
            keyUp = {this.keyUp} 
            handleClick = {this.handleClick} 
            loggedUser={this.state.loggedUser} 
            logout={this.logout}
            setSettings={this.setSettings}
            setSearchUser = {this.setSearchUser}
            />
          <Content
            searchUser = {this.state.searchUser}
            setSearchUser = {this.setSearchUser}
            setNotice = {this.setNotice}
            notice = {this.state.notice}
            search={this.search}
            loggedIn={this.state.loggedIn}
            searchPlace = {this.state.searchPlace} 
            login={this.state.login} 
            register={this.state.register} 
            handleClick = {this.handleClick}
            getLoggedUser={this.getLoggedUser}
            setSettings={this.setSettings}
            settings={this.state.settings}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
