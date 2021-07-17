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
            numberPages:0
        }
        this.getUsers = this.getUsers.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
        this.setNumberPage = this.setNumberPage.bind(this);
        this.getNumberPages = this.getNumberPages.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount(){
        this.getUsers(this.state.numberPage);
        this.getNumberPages();
    }

    async getUsers(numberPage){
        await authenticationService.getAllUsers(numberPage).then(res =>{
            this.setState({
                users:res
            })
        })
    }

    async getNumberPages(){
        await authenticationService.getNumberPages().then(res =>{
            this.setState({
                numberPages:res
            })
        })
    }

    increaseNumberPage(){
        if(this.state.numberPage < (this.state.numberPages-1)){
            const number = this.state.numberPage+1;
            this.setState({
                numberPage:number
            })
            this.getUsers(number);
        }
    }
    
    reduceNumberPage(){
        if(this.state.numberPage>0){
            const number = this.state.numberPage-1;
            this.setState({
                numberPage:number
            })
            this.getUsers(number);
        }
    }

    setNumberPage(number){
        const num = number - 1;
        this.setState({
            numberPage:num
        })
    }

    async deleteUser(id){
        console.log("Delete user with id: "+id)
        await authenticationService.deleteUser(id).then(res =>{
            if(res.status==200){
                alert("Korisnik je uspešno obrisan!")
                this.getNumberPages();
                this.getUsers(this.state.numberPage==(this.state.numberPages-1)?(this.state.numberPage-1):this.state.numberPage);
            }else{
                alert("Došlo je do greške!")
            }
        })
    }
    
    render(){
        const users = this.state.users.length>0 && <Users 
                                                        users={this.state.users}
                                                        reduceNumberPage = {this.reduceNumberPage}
                                                        deleteUser = {this.deleteUser}
                                                        increaseNumberPage = {this.increaseNumberPage}
                                                        setNumberPage = {this.setNumberPage}
                                                        numberPage = {this.state.numberPage}
                                                        numberPages = {this.state.numberPages}
                                                    />
        return(
            <div>
                {users}
            </div>
        )
    }
}
export default UsersContainer