import React, { Component } from "react"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"
import Navigation from "./Navigation"

class Header extends Component{

    render(){
        const logged = this.props.loggedUser!=='' ? <LoggedIn 
                                                        loggedUser={this.props.loggedUser} 
                                                        logout={this.props.logout}
                                                        setSettings={this.props.setSettings}
                                                    />:
                                                    <LoggedOut
                                                        handleClick={this.props.handleClick}
                                                    />
        return(
            <header className='header mb-1'>
                {logged}
                <Navigation search = {this.props.search} keyUp = {this.props.keyUp} searchUser = {this.props.searchUser} setSearchUser = {this.props.setSearchUser}/>
            </header>
        )
    }
}

export default Header