import React from 'react'

function ContentCW(props){
    const description = props.state.currentWeather.weather.map(w => {
        return w.description
    });
    const time = props.timeConverter(props.state.currentWeather.dt);
    return(
        <div className='h-50 pt-5 pl-5'>
            <h2 id='currentImg' className='w-50 float-left'>
                <b>{props.state.currentWeather.name}</b>
            </h2>
            <h2 className='w-50 float-right text-center'>{time}</h2>
            <div className='d-inline-block pl-4 mt-4'>
                <img src={props.state.icon} />
                <h3 className='d-inline-block'>
                    <b>{props.state.currentWeather.main.temp} °c </b>
                    <p style={{fontSize:'8pt'}}>{description}</p>
                </h3>
                <div>
                    <p className='d-inline'><b>Min:</b> {props.state.currentWeather.main.temp_min} °c</p>
                    <p className='d-inline pl-4'><b>Max:</b> {props.state.currentWeather.main.temp_max} °c</p>
                    <p className='mt-1'><b>Vetar:</b> {props.state.currentWeather.wind.speed} m/s</p>
                </div>
            </div>
            <div className='d-inline-block ml-5 '>
                <p className=''><b>Pritisak:</b> {props.state.currentWeather.main.pressure} mb</p>
                <p className=''><b>Relativna vlažnost:</b> {props.state.currentWeather.main.humidity} %</p>
                <p className=''><b>Vidljivost:</b> {props.state.currentWeather.visibility/1000} km</p>
            </div>
        </div>
    )
}

export default ContentCW