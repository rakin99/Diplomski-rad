import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

function Navigation(props){
    return(
        <div>
            <NavDesktop search = {props.search} keyUp = {props.keyUp} searchUser = {props.searchUser} setSearchUser = {props.setSearchUser}/>
        </div>
    )
}

export default Navigation