import React from 'react'
import OneHourForecast from './OneHourForecast';

function Forecast5Hours(props){
    console.log(props)
    const hoursForecast = props.forecast5Hours.hourly.map(hf => {
        return <OneHourForecast key={hf.dt} hourForecast={hf} />
    });
    // const forecastHour = props.state.map();
    return(
        <div className='ml-2'>
            {hoursForecast}
        </div>
    )
}

export default Forecast5Hours