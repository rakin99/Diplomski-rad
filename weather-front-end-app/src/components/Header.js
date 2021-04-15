import React from "react"
import LoggedIn from "./LoggedIn"
import Navigation from "./Navigation"

function Header(){
    return(
        <header className='header'>
            <LoggedIn />
            <Navigation />
        </header>
    )
}

export default Header