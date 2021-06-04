import React from 'react'
import TimeConverter from '../../services/TimeConverter';

function ContentCW(props){
    const timeConverter = new TimeConverter();
    const description = props.currentWeather.weather.map(w => {
        var convert = require('cyrillic-to-latin')
        return convert(w.description)
    });
    const time = timeConverter.convertTime(props.currentWeather.dt);
    return(
        <div className='h-50 pt-4 pl-5 d-inline-block'>
            <h2 className='w-50 float-left'>
                <b>{props.currentWeather.name}</b>
            </h2>
            <h2 className='w-50 float-right text-center'>{time}</h2>
            <div className='d-inline-block pl-4 mt-4'>
                <img src={props.icon} />
                <h3 className='d-inline-block'>
                    <b>{Math.floor(props.currentWeather.main.temp*10)/10} °c </b>
                    <p className="font-7pt">{description}</p>
                </h3>
                <div>
                    <p className='d-inline'><b>Min:</b> {Math.floor(props.currentWeather.main.temp_min*10)/10} °c</p>
                    <p className='d-inline pl-4'><b>Max:</b> {Math.floor(props.currentWeather.main.temp_max*10)/10} °c</p>
                    <p className='mt-1'><b>Vetar:</b> {props.currentWeather.wind.speed} m/s</p>
                </div>
            </div>
            <div className='d-inline-block ml-5 '>
                <p className=''><b>Pritisak:</b> {props.currentWeather.main.pressure} mb</p>
                <p className=''><b>Relativna vlažnost:</b> {props.currentWeather.main.humidity} %</p>
                <p className=''><b>Vidljivost:</b> {props.currentWeather.visibility/1000} km</p>
            </div>
        </div>
    )
}

export default ContentCW