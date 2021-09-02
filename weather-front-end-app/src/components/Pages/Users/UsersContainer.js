import React, { Component } from "react"
import { Redirect } from "react-router-dom";
import Notice from "../../Notice";
import UserService from "../../services/UserService"
import Users from "./Users";

var authenticationService = new UserService();
class UsersContainer extends Component{
    
    constructor(){
        super()
        this.state = {
            users:[],
            numberPage:0,
            numberPages:0,
        }
        this.getUsers = this.getUsers.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
        this.setNumberPage = this.setNumberPage.bind(this);
        this.getNumberPages = this.getNumberPages.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    async componentDidMount(){
        // this.getUsers(this.state.numberPage);
        if(!this.props.searchUser.view){
            this.props.setSearchUser('',true,false);
        }else{
            this.getUsers(this.state.numberPage)
            this.getNumberPages(this.props.searchUser.value);
        }
    }

    async getUsers(numberPage){
        await authenticationService.getUserByEamil(numberPage,(this.props.searchUser.view && !this.props.searchUser.editUser)?this.props.searchUser.value:'').then(res=>{
            this.setState({
                users:res
            })
        });
    }

    async getNumberPages(email){
        await authenticationService.getNumberPages(email).then(res =>{
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
        this.getUsers(num);
    }

    async deleteUser(id){
        await authenticationService.deleteUser(id).then(res =>{
            if(res.status==200){
                this.props.setNotice("noticeDelete",true,"Korisnik je uspešno obrisan!")
                this.getNumberPages(this.props.searchUser.value);
                this.getUsers(this.state.numberPage==(this.state.numberPages-1)?(this.state.numberPage-1):this.state.numberPage);
            }else{
                this.props.setNotice("noticeDelete",true,"Došlo je do greške!")
            }
        })
    }
    
    render(){
        const users = this.state.users.length>0 && <Users
                                                        setSettings = {this.props.setSettings}
                                                        users={this.state.users}
                                                        reduceNumberPage = {this.reduceNumberPage}
                                                        deleteUser = {this.deleteUser}
                                                        increaseNumberPage = {this.increaseNumberPage}
                                                        setNumberPage = {this.setNumberPage}
                                                        numberPage = {this.state.numberPage}
                                                        numberPages = {this.state.numberPages}
                                                        searchUser = {this.props.searchUser}
                                                        setSearchUser = {this.props.setSearchUser}
                                                    />
        const redirect = !this.props.settings && <Redirect to="/users" />
        return(
            <div>
                <Notice
                    notice = {this.props.notice.noticeDelete}
                    message = {this.props.notice.message}
                    setNotice = {this.props.setNotice}
                    mode = "noticeDelete"
                />
                {users}
                {redirect}
            </div>
        )
    }
}
export default UsersContainer