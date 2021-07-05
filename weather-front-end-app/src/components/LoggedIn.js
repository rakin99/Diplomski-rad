import React, { Component } from 'react'

class LoggedIn extends Component{

    render(){
        return(
            <ul className="user">
                <li id="loggedIn" >
                    <a href="#"
                        onClick={this.props.handleClick}
                    ><b id="login">Prijavi se</b></a>
                    <div className="invisible1"></div>
                    <div className="user-menu">
                        <ul style={{padding:'0px'}}>
                            <li style={{padding:'0px'}}>
                                <a href="#" className="link">Change password</a>
                            </li>
                            <li style={{padding:'0px'}}>
                                <a href="#" className="link">Logout</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="register" className="last">
                    <a href="#" onClick={this.props.handleClick}><b id='register'>Registracija</b></a>
                </li>
            </ul>
        )
    }
}

export default LoggedIn