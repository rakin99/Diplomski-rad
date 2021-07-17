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
                <div className='mt-3'>
                    <table className="table mb-1 text-light text-center">
                        <thead>
                            <tr>
                                <th >E-mail</th>
                                <th >Uloga</th>
                                <th >Upozorenja</th>
                                <th >Okrug</th>
                                <th></th>
                            </tr>
                        </thead>
                        <UserRow users={this.props.users} deleteUser = {this.props.deleteUser}/>
                    </table>
                    <UserPagination 
                        reduceNumberPage = {this.props.reduceNumberPage}
                        increaseNumberPage = {this.props.increaseNumberPage}
                        setNumberPage = {this.props.setNumberPage}
                        numberPage = {this.props.numberPage}
                        numberPages = {this.props.numberPages}  
                    />
                </div>
            </div>
        )
    }
}

export default Users