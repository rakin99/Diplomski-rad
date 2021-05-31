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
    }
    this.search = this.search.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  search(searchPlace){
    this.setState({searchPlace:searchPlace})
  }

  keyUp(event){
    if(event.keyCode==13){
      this.search(event.target.value)
    }
  }

  render(){
    return (
      <div className="container">
        <Router>
          <Header search = {this.search} keyUp = {this.keyUp}/>
          <Content searchPlace = {this.state.searchPlace}/>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
