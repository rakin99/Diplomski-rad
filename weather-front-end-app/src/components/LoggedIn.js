import React from 'react'

function LoggedIn(){
    return(
        <ul className="user">
            <li id="loggedIn" >
                <a href="#"><b>Sladjana Miljanovic</b></a>
                <div className="invisible1"></div>
                <div className="user-menu">
                    <ul style={{padding:'0px'}}>
                        <li style={{padding:'0px'}}>
                            <a href="#" className="link">Change password</a>
                        </li>
                        <li style={{padding:'0px'}}>
                            <a href="#" className="link">Settings</a>
                        </li>
                        <li style={{padding:'0px'}}>
                            <a href="#" className="link">Export all data</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li style={{borderRight:'none'}}>
                <a href="#"><b>Logout</b></a>
            </li>
        </ul>
    )
}

export default LoggedIn