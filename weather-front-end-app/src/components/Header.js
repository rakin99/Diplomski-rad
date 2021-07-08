import React, { Component } from "react"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"
import Navigation from "./Navigation"

class Header extends Component{

    render(){
        const logged = this.props.loggedIn.id>0 ? <LoggedIn loggedIn={this.props.loggedIn} logout={this.props.logout}/>:<LoggedOut
                                                                                                                            handleClick={this.props.handleClick}/>
        return(
            <header className='header mb-1'>
                {logged}
                <Navigation search = {this.props.search} keyUp = {this.props.keyUp}/>
            </header>
        )
    }
}

export default Header