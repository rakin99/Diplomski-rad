import React from 'react'
import {NavLink} from "react-router-dom";

function NavDesktop(){
    return(
        <nav className = 'navbar navbar-expand-lg navbar-dark d-block'>
            <ul className="nav nav-tabs myNav">
                <li className="nav-item">
                    <NavLink exact to="/current-weather" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
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
                    <input className="form-control mr-sm-1" type="search" placeholder="Naziv mesta..." aria-label="Search"/>
                    <button className="btn btn-light" type="submit">Traži</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavDesktop