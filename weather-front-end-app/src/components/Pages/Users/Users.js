import React, { Component } from "react"
import UserPagination from "./UserPagination";
import UserRow from "./UserRow";

class Users extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className='h-50 pt-4 pl-5 d-inline-block'>
                <div className="row">
                    <div>
                        <h2 className='col-sm-12'>
                            <b>Korisnici</b>
                        </h2>
                    </div>
                </div>
                <div className='w-75 mt-3'>
                    <table className="table mb-1 text-light text-center">
                        <thead>
                            <tr>
                                <td >E-mail</td>
                                <td >Uloga</td>
                                <td >Upozorenja</td>
                                <td >Okrug</td>
                            </tr>
                        </thead>
                        <UserRow users={this.props.users}/>
                    </table>
                    <UserPagination 
                        reduceNumberPage = {this.props.reduceNumberPage}
                        increaseNumberPage = {this.props.increaseNumberPage}    
                    />
                </div>
            </div>
        )
    }
}

export default Users