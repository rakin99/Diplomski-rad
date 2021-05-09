import React from 'react'
import OneHourForecast from './OneHourForecast';

function Forecast5Hours(props){
    const hoursForecast = props.forecast3Hours.hourly.map(hf => {
        return <OneHourForecast key={hf.dt} timeConverter = {props.timeConverter} hourForecast={hf} />
    });
    // const forecastHour = props.state.map();
    return(
        <div className='h-50% w-50% ml-3 mt-2'>
            {hoursForecast}
        </div>
    )
}

export default Forecast5Hours