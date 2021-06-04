import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import TBody7Days from './TBody7Days';

class Table7Days extends Component{

    render(){
        const timeConverter = new TimeConverter();
        const ths = this.props.daily.map(d=>{
            // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
            return <th key={d.dt}>
                        {timeConverter.convertTimeToDayOfWeek(d.dt)}
                        <p className="font-9pt mb-0 text-center">
                            {timeConverter.convertTimeToDayAndMonth(d.dt)}
                        </p>
                    </th>
        })
        return(
            <div className="w-95 mt-3">
                <table className="table mb-1">
                    <thead className="text-light">
                        <tr>
                            <th></th>
                            {ths}
                        </tr>
                    </thead>
                    <TBody7Days daily = {this.props.daily}/>
                </table>
            </div>
        )
    }
}

export default Table7Days