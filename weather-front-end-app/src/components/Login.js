import React, {Component, useState} from "react"
import AuthenticationService from "./services/AuthenticationService";

var authenticationService = new AuthenticationService();
class Login extends Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    async handleSubmit(){
        authenticationService.login(this.state).then(res => 
            {   
                // console.log("Res: "+JSON.stringify({
                //         username: this.state.username,
                //         roles: authenticationService.getRoles(res.value),
                //         token: res.value
                //     }))
                
                if(res.status!=500){
                    localStorage.setItem('loggedUser',JSON.stringify({
                        username: this.state.username,
                        roles: authenticationService.getRoles(res.value),
                        token: res.value
                    }));
                }
                authenticationService.getRolesFromStorage();
            }
        );
    }

    render(){
        return(
        <div style={{
            backgroundColor:'white', 
            padding:'10px 10px 10px 10px', 
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
        }}>
            <a className="close" href="#" id="closeLogin" onClick={this.props.handleClick}/>
            <div onChange={this.handleChange}>
                <div id="login" className="new-member-inner">
                    <h2>Prijava</h2>
                    <ul className="form">
                        <li>
                            <label>E-mail:</label>
                            <input type="text" name="username" defaultValue={this.state.username} className="form-control mr-sm-1" />
                        </li>								
                        <li>
                            <label>Lozinka:</label>
                            <input type="password" name="password" defaultValue={this.state.password} className="form-control mr-sm-1" />
                        </li>
                    </ul>
                    <div className="text-center">
                        <button id="submitLogin" className="btn btn-primary" onClick={(e)=>{
                                                                    this.handleSubmit(this.state)
                                                                    this.props.handleClick(e)}}>Prijavi se</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login