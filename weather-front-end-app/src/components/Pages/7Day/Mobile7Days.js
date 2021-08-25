import React, { Component } from 'react'
import OneHourForecast from '../CurrentWeather/OneHourForecast';

class Mobile7Days extends Component{

    render(){
        // console.log("Render")
        const hoursForecast = this.props.daily.map(hf => {
            return <OneHourForecast key={hf.dt} hourForecast={hf} sevenDay={true}/>
        });
        return(
            <div className="mt-3" id="mobile7Days">
                {hoursForecast}
            </div>
        )
    }
}

export default Mobile7Days