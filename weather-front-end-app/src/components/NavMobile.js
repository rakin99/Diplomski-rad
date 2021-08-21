import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import UserService from './services/UserService';

var authenticationService = new UserService();
class NavMobile extends Component{

    constructor(){
        super();
        this.state = {
            mesto:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name,value} = event.target;
        this.state[name]=value;
    }
    
    render(){
        const users = (authenticationService.getUserFromStorage()!=null &&  authenticationService.getUserFromStorage().roles[0][0].authority==='ROLE_ADMIN') && 
                                                                    <li className="nav-item">
                                                                        <NavLink to="/users" onClick={()=>{this.props.setSearchUser('',true,false); this.props.collapse()}} className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                                                                            <b>Korisnici</b>
                                                                        </NavLink>
                                                                    </li>
        const textPlaceholder = this.props.searchUser?"E-mail korisnika...":"Naziv mesta..."
        return(
                <ul className=" mobileNav">
                    <li className="nav-item">
                        <NavLink exact to="/current-weather/" onClick={()=>{this.props.setSearchUser('',false,false); this.props.collapse()}} className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Trenutna prognoza</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/48h-weather" onClick={()=>{this.props.setSearchUser('',false,false); this.props.collapse()}} className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>48h prognoza</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/7-day-weather" onClick={()=>{this.props.setSearchUser('',false,false); this.props.collapse()}} className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Za 7 dana</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/air-pollution" onClick={()=>{this.props.setSearchUser('',false,false); this.props.collapse()}} className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Zagađenje vazduha</b>
                        </NavLink>
                    </li>
                    {users}
                </ul>
        )
    }
}

export default NavMobile