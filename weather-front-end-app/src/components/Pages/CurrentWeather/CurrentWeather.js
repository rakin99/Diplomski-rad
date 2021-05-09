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
            forecast3Hours : {
                "lat": 45.2517,
                "lon": 19.8369,
                "timezone": "Europe/Belgrade",
                "timezone_offset": 7200,
                "hourly": [
                    {
                        "dt": 1620547200,
                        "temp": 15.9,
                        "feels_like": 14.49,
                        "pressure": 1024,
                        "humidity": 36,
                        "dew_point": 0.86,
                        "uvi": 4.21,
                        "clouds": 0,
                        "visibility": 10000,
                        "wind_speed": 5.26,
                        "wind_deg": 134,
                        "wind_gust": 6.84,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "грмљавина са слабом кишом",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1620550800,
                        "temp": 16.11,
                        "feels_like": 14.74,
                        "pressure": 1024,
                        "humidity": 37,
                        "dew_point": 1.43,
                        "uvi": 5.75,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 5.51,
                        "wind_deg": 133,
                        "wind_gust": 6.52,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1620554400,
                        "temp": 16.8,
                        "feels_like": 15.42,
                        "pressure": 1024,
                        "humidity": 34,
                        "dew_point": 0.86,
                        "uvi": 6.73,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 5.48,
                        "wind_deg": 132,
                        "wind_gust": 6.32,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1620558000,
                        "temp": 17.84,
                        "feels_like": 16.54,
                        "pressure": 1023,
                        "humidity": 33,
                        "dew_point": 1.36,
                        "uvi": 6.9,
                        "clouds": 10,
                        "visibility": 10000,
                        "wind_speed": 5.28,
                        "wind_deg": 130,
                        "wind_gust": 6.08,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1620561600,
                        "temp": 19.12,
                        "feels_like": 17.9,
                        "pressure": 1022,
                        "humidity": 31,
                        "dew_point": 1.61,
                        "uvi": 6.21,
                        "clouds": 12,
                        "visibility": 10000,
                        "wind_speed": 5.08,
                        "wind_deg": 130,
                        "wind_gust": 5.95,
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "местимични облаци",
                                "icon": "02d"
                            }
                        ],
                        "pop": 0
                    }
                ]
            },
            icon:"http://openweathermap.org/img/wn/"
        }
        this.timeConverter = this.timeConverter.bind(this);
    }

    componentDidMount(){
        this.setState({icon:this.state.icon+this.state.currentWeather.weather[0].icon+'@2x.png'})
    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours();
        var min = a.getMinutes()==0 ? '':':'+a.getMinutes();
        var time = hour + min + 'h';
        return time;
      }

    render(){
        return(
            <div style={{height:'100%'}}>
                <ContentCW timeConverter = {this.timeConverter} state={this.state}/>
                <Forecast5Hours timeConverter = {this.timeConverter} forecast3Hours = {this.state.forecast3Hours}/>
            </div>
        );
    }
}

export default CurrentWeather