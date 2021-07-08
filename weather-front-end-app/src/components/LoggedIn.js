import React, { Component } from 'react'

class LoggedIn extends Component{

    render(){
        return(
            <ul className="user">
                <li id="loggedIn" >
                    <a href="#"><b id="login">{this.props.loggedIn.username}</b></a>
                    <div className="invisible1"></div>
                    <div className="user-menu">
                        <ul style={{padding:'0px'}}>
                            <li style={{padding:'0px'}}>
                                <a href="#" className="link">Change password</a>
                            </li>
                            <li style={{padding:'0px'}}>
                                <a href="#" className="link" onClick={this.props.logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
}

export default LoggedIn