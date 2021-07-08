import React, { Component } from 'react'

class LoggedOut extends Component{

    render(){
        return(
            <ul className="user">
                <li className="dotted-right" id="loggedOut" >
                    <a href="#"
                        onClick={this.props.handleClick}
                    ><b id="login">Prijavi se</b></a>
                </li>
                <li id="register" className="last">
                    <a href="#" onClick={this.props.handleClick}><b id='register'>Registracija</b></a>
                </li>
            </ul>
        )
    }
}

export default LoggedOut