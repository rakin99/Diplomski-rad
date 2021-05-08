import React, { Component } from 'react'
import ContentCW from './ContentCW';
import Forecast5Hours from './Forecast5Hours';

class CurrentWeather extends Component{

    constructor(){
        super();
        this.state = {
            currentWeather:{
                "coord": {
                    "lon": 19.8369,
                    "lat": 45.2517
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "Razbacani oblaci",
                        "icon": "03d"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 11.98,
                    "feels_like": 11.22,
                    "temp_min": 11.11,
                    "temp_max": 12.78,
                    "pressure": 1014,
                    "humidity": 76
                },
                "visibility": 10000,
                "wind": {
                    "speed": 3.6,
                    "deg": 250
                },
                "clouds": {
                    "all": 40
                },
                "dt": 1618917466,
                "sys": {
                    "type": 1,
                    "id": 7030,
                    "country": "RS",
                    "sunrise": 1618890404,
                    "sunset": 1618939917
                },
                "timezone": 7200,
                "id": 3194360,
                "name": "Novi Sad",
                "cod": 200
            },
            icon:"http://openweathermap.org/img/wn/"
        }
    }

    componentDidMount(){
        this.setState({icon:this.state.icon+this.state.currentWeather.weather[0].icon+'@2x.png'})
    }

    render(){
        return(
            <div>
                <ContentCW state={this.state}/>
                <Forecast5Hours />
            </div>
        );
    }
}

export default CurrentWeather