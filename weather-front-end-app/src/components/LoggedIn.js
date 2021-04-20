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
                            <a href="#" className="link">Logout</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default LoggedIn