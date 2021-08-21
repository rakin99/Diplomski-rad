import React, { Component } from "react"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"
import Navigation from "./Navigation"
import NavMobile from "./NavMobile"

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
        const mobileNav = this.props.collapsed && <NavMobile collapse = {this.props.collapse} search = {this.props.search} keyUp = {this.props.keyUp} searchUser = {this.props.searchUser} setSearchUser = {this.props.setSearchUser}/>
        return(
            <header className='header mb-1'>
                <div className="float-left">
                    <button
                        className="menu ml-2 mt-2"
                        onClick = {this.props.collapse}
                        id="navbarDropdown"
                    >
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                    {mobileNav}
                </div>
                {logged}
                <Navigation collapsed = {this.props.collapsed} search = {this.props.search} keyUp = {this.props.keyUp} searchUser = {this.props.searchUser} setSearchUser = {this.props.setSearchUser}/>
            </header>
        )
    }
}

export default Header