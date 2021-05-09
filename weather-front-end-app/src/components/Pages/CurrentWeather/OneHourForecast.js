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
        return(
            <div className='d-inline-block ml-5 mt-4 small text-center oneHourForecast'>
                <h6>{time}</h6>
                <hr className='mb-0 mt-0' />
                <img src={this.state.icon}></img>
                <p className='mb-0 mt-0'>{this.state.hourForecast.temp} °c</p>
                {/* <p className='mb-2'>{this.state.hourForecast.weather[0].description}</p> */}
            </div>
        )
    }
}

export default OneHourForecast