import React from 'react'
import {NavLink} from "react-router-dom";

function NavDesktop(){
    return(
        <nav className = 'navbar navbar-expand-lg navbar-dark'>
            <ul class="nav nav-tabs myNav">
                <li class="nav-item">
                    <NavLink exact to="/time-sheet" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                        <b>Trenutna prognoza</b>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/clients" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                        <b>48h prognoza</b>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/projects" className="nav-link myNav-link" activeClassName="nav-link myNav-active">
                        <b>Za 7 dana</b>
                    </NavLink>
                </li>
                </ul>
        </nav>
    )
}

export default NavDesktop