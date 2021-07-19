import React from 'react'
import NavDesktop from './NavDesktop'

function Navigation(props){
    return(
        <NavDesktop search = {props.search} keyUp = {props.keyUp} searchUser = {props.searchUser} setSearchUser = {props.setSearchUser}/>
    )
}

export default Navigation