import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class NavDesktop extends Component{

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
        return(
            <nav className = 'navbar navbar-expand-lg navbar-dark d-block'>
                <ul className="nav nav-tabs myNav">
                    <li className="nav-item">
                        <NavLink exact to="/current-weather/" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Trenutna prognoza</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/48h-weather" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>48h prognoza</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/7-day-weather" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Za 7 dana</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/air-pollution" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                            <b>Zagađenje vazduha</b>
                        </NavLink>
                    </li>
                    <li className="form-inline ml-1">
                        <input 
                            className="form-control mr-sm-1" 
                            onChange={this.handleChange}
                            onKeyUp={this.props.keyUp}
                            name={"mesto"} 
                            type="search" 
                            placeholder="Naziv mesta..." 
                            defaultValue={this.state.mesto}
                        />
                        <button className="btn btn-light" onClick={() =>{this.props.search(this.state.mesto)}}>Traži</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavDesktop