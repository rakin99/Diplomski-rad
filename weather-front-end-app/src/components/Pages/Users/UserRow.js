import React from "react"
import { Link } from "react-router-dom";

function UserRow(props){
    const userRow = props.users.map(user => {
        const role = user.role.substring(5,user.role.length);
        return  <tr key={user.id}>
                    <td className="pl-1 pr-1"><Link to={`/users/${user.username}`} onClick={()=>{
                                                                                                    props.setSearchUser(user.username,true,true)
                                                                                                    props.setSettings(true)
                                                                                                    }
                                                                                                } 
                                                                                                className="text-light" >
                                                                                                {user.username}</Link> </td>
                    <td className="pl-1 pr-1">{role}</td>
                    <td className="pl-1 pr-1"><input type="checkbox" checked={user.alerts} readOnly/></td>
                    <td className="pl-1 pr-1">{user.area===''?'/':user.area}</td>
                    <td className="pl-1 pr-1"><button type="button" className="btn btn-danger btn-sm" onClick={()=>{props.deleteUser(user.id)}}>X</button></td>
                </tr>
    })
    return(
        <tbody>
            {userRow}
        </tbody>
    )
}

export default UserRow