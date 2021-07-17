import React, { Component } from "react"
import AuthenticationService from "../../services/AuthenticationService"
import Users from "./Users";

var authenticationService = new AuthenticationService();
class UsersContainer extends Component{
    
    constructor(){
        super()
        this.state = {
            users:[],
            numberPage:0,
        }
        this.getUsers = this.getUsers.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
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

    increaseNumberPage(){
        console.log("increaseNumberPage: "+this.state.users.length/5)
        // if(this.state.numberPage < 1){
        //     // console.log("Prosao u if")
        //     const numberPage = this.state.numberPage+1;
        //     this.setState({
        //         numberPage:numberPage
        //     })
        //     this.getUsers();
        // }
      }
    
    reduceNumberPage(){
        // console.log("reduceNumberPage: "+this.state.numberPage)
        if(this.state.numberPage>0){
            // console.log("Ulazim u if")
            const numberPage = 0===this.state.numberPage-1?this.state.numberPage:this.state.numberPage-1;
            this.setState({
                numberPage:numberPage
            })
            this.getUsers();
        }
    }
    
    render(){
        // console.log("Users: "+JSON.stringify(this.state.users))
        const users = this.state.users.length>0 && <Users 
                                                        users={this.state.users}
                                                        reduceNumberPage = {this.reduceNumberPage}
                                                        increaseNumberPage = {this.increaseNumberPage}
                                                    />
        return(
            <div>
                {users}
            </div>
        )
    }
}
export default UsersContainer