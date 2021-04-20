import React from "react"
import LoggedIn from "./LoggedIn"
import Navigation from "./Navigation"

function Header(){
    return(
        <header className='header mb-1'>
            <LoggedIn />
            <Navigation />
        </header>
    )
}

export default Header