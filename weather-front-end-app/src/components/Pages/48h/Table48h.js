import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import Pagination48h from './Pagination48h';
import TBody48h from './TBody48h';

class Table48h extends Component{

    render(){
        const timeConverter = new TimeConverter();
        const ths = this.props.hourly.map(h=>{
            // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
            return <th key={h.dt}>{timeConverter.convertTime(h.dt)}</th>
        })
        return(
            <div className="mt-3 w-95" id='desktop48h'>
                <table className="table mb-1">
                    <thead className="text-light">
                        <tr>
                            <th></th>
                            {ths}
                        </tr>
                    </thead>
                    <TBody48h hourly = {this.props.hourly}/>
                </table>
                <Pagination48h reduceNumberPage={this.props.reduceNumberPage} increaseNumberPage={this.props.increaseNumberPage}/>
            </div>
        )
    }
}

export default Table48h