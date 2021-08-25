import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import TBody7Days from './TBody7Days';

class Table7Days extends Component{

    render(){
        // console.log("Render")
        const timeConverter = new TimeConverter();
        const ths = this.props.daily.map(d=>{
            // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
            return <th className="text-center" key={d.dt}>
                        {timeConverter.convertTimeToDayOfWeek(d.dt)}
                        <p className="font-9pt mb-0">
                            {timeConverter.convertTimeToDayAndMonth(d.dt)}
                        </p>
                    </th>
        })
        return(
            <div className="mt-3 w-95" id='desktop7Days'>
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