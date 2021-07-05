import React, { Component } from "react"
import LoggedIn from "./LoggedIn"
import Navigation from "./Navigation"

class Header extends Component{

    render(){
        return(
            <header className='header mb-1'>
                <LoggedIn handleClick={this.props.handleClick}/>
                <Navigation search = {this.props.search} keyUp = {this.props.keyUp}/>
            </header>
        )
    }
}

export default Header