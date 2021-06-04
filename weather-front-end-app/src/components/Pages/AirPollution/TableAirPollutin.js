import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import TBodyAirPollution from './TBodyAirPollution';

class TableAirPollution extends Component{

    render(){
        const timeConverter = new TimeConverter();
        const ths = this.props.forecast.map(f=>{
            // console.log("Deljivo je sa tri: "+this.props.hourly.indexOf(h))
            return <th className="text-center font-10pt" key={f.dt}>{timeConverter.convertTime(f.dt)}</th>
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
                    <TBodyAirPollution forecast = {this.props.forecast}/>
                </table>
            </div>
        )
    }
}
export default TableAirPollution