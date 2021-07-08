import { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthenticationService from "./components/services/AuthenticationService";

var authenticationService = new AuthenticationService();
class App extends Component {

  constructor(){
    super();
    this.state = {
      searchPlace:'',
      login:false,
      register:false,
      loggedIn:''
    }
    this.search = this.search.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getLoggedUser=this.getLoggedUser.bind(this);
    this.logout=this.logout.bind(this);
  }

  componentDidMount(){
    this.getLoggedUser();
  }

  search(searchPlace){
    localStorage.setItem('searchPlace',searchPlace);
    this.setState({searchPlace:searchPlace})
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
        register:false
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
            // console.log("Res: "+JSON.stringify(res))
            this.setState({
              loggedIn:res
            })
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
            keyUp = {this.keyUp} 
            handleClick = {this.handleClick} 
            loggedIn={this.state.loggedIn} 
            logout={this.logout}
            />
          <Content 
            searchPlace = {this.state.searchPlace} 
            login={this.state.login} 
            register={this.state.register} 
            handleClick = {this.handleClick}
            getLoggedUser={this.getLoggedUser}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
