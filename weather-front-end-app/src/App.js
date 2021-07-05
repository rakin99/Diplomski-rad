import { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

  constructor(){
    super();
    this.state = {
      searchPlace:'',
      login:false,
      register:false
    }
    this.search = this.search.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render(){
    return (
      <div className="container">
        <Router>
          <Header search = {this.search} keyUp = {this.keyUp} handleClick = {this.handleClick}/>
          <Content searchPlace = {this.state.searchPlace} login={this.state.login} register={this.state.register} handleClick = {this.handleClick}/>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
