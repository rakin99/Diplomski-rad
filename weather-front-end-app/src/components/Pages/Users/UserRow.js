import React from "react"

function UserRow(props){
    const userRow = props.users.map(user => {
        return  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td >{user.role}</td>
                    <td ><input type="checkbox" checked={user.alerts} readOnly/></td>
                    <td >{user.area===''?'/':user.area}</td>
                    <td ><button type="button" className="btn btn-danger btn-sm" onClick={()=>{props.deleteUser(user.id)}}>X</button></td>
                </tr>
    })
    return(
        <tbody>
            {userRow}
        </tbody>
    )
}

export default UserRow