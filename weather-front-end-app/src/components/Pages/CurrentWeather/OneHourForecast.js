import React, { Component } from 'react'

class OneHourForecast extends Component{

    constructor(props){
        super(props);
        this.state = {
            hourForecast:props.hourForecast,
            icon:"http://openweathermap.org/img/wn/"+props.hourForecast.weather[0].icon+'.png'
        }
    }

    render(){
        const time=this.props.timeConverter(this.state.hourForecast.dt);
        var convert = require('cyrillic-to-latin')
        return(
            <div className='d-inline-block ml-5 mt-4 small text-center oneHourForecast' style={{verticalAlign: 'top'}}>
                <h6>{time}</h6>
                <hr className='mb-0 mt-0' />
                <img src={this.state.icon}></img>
                <label className=''>{this.state.hourForecast.temp} °c</label>
                <p className='mb-2'>{this.state.hourForecast.wind_speed} m/s</p>
                <p className='' style={{fontSize:'7pt'}}>{convert(this.state.hourForecast.weather[0].description)}</p>
            </div>
        )
    }
}

export default OneHourForecast