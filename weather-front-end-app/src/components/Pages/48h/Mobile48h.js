import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import OneHourForecast from '../CurrentWeather/OneHourForecast';
import Pagination48h from './Pagination48h';

class Mobile48h extends Component{

    render(){
        const hoursForecast = this.props.hourly.map(hf => {
            return <OneHourForecast key={hf.dt} hourForecast={hf} />
        });
        return(
            <div className="mt-3" id='mobile48h'>
                {hoursForecast}
                <Pagination48h reduceNumberPage={this.props.reduceNumberPage} increaseNumberPage={this.props.increaseNumberPage}/>
            </div>
        )
    }
}

export default Mobile48h