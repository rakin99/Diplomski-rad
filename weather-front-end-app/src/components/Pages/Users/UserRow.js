import React from "react"

function UserRow(props){
    const userRow = props.users.map(user => {
        return  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td >{user.role}</td>
                    <td ><input type="checkbox" checked={user.alerts} readOnly /></td>
                    <td >{user.area}</td>
                </tr>
    })
    return(
        <tbody>
            {userRow}
        </tbody>
    )
}

export default UserRow