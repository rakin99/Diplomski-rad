import React from "react"
import LoggedIn from "./LoggedIn"
import Navigation from "./Navigation"

function Header(props){
    return(
        <header className='header mb-1'>
            <LoggedIn />
            <Navigation search = {props.search} keyUp = {props.keyUp}/>
        </header>
    )
}

export default Header