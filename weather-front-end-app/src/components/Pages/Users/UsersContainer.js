import React, { Component } from "react"
import AuthenticationService from "../../services/AuthenticationService"

var authenticationService = new AuthenticationService();
class Users extends Component{
    
    constructor(){
        super()
        this.state = {
            users:[]
        }
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount(){
        this.getUsers();
    }

    async getUsers(){
        await authenticationService.getAllUsers().then(res =>{
            console.log(res)
            this.setState({
                users:res
            })
        })
    }
    
    render(){
        // console.log("Users: "+JSON.stringify(this.state.users))
        return(
            <h1>Users</h1>
        )
    }
}
export default Users