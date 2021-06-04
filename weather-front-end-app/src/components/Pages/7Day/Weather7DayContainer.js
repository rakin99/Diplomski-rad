import React, { Component } from 'react'
import ErrorMessage from '../../ErrorMessage';
import WeatherService from '../../services/WeatherService';
import Content7Days from './Content7Days';

var weatherService = new WeatherService();
class Weather7DayContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            errorMessage:'',
            weather7Days : {
                "lat": 45.2517,
                "lon": 19.8369,
                "timezone": "Europe/Belgrade",
                "timezone_offset": 7200,
                "daily": [
                    {
                        "dt": 1622887200,
                        "sunrise": 1622861672,
                        "sunset": 1622917446,
                        "moonrise": 1622853720,
                        "moonset": 1622899800,
                        "moon_phase": 0.85,
                        "temp": {
                            "day": 25.1,
                            "min": 14.97,
                            "max": 26.2,
                            "night": 19.05,
                            "eve": 25.33,
                            "morn": 15.57
                        },
                        "feels_like": {
                            "day": 24.68,
                            "night": 18.42,
                            "eve": 25.02,
                            "morn": 14.93
                        },
                        "pressure": 1020,
                        "humidity": 39,
                        "dew_point": 10.06,
                        "wind_speed": 2.64,
                        "wind_deg": 119,
                        "wind_gust": 2.61,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 7,
                        "pop": 0,
                        "uvi": 7.82
                    },
                    {
                        "dt": 1622973600,
                        "sunrise": 1622948048,
                        "sunset": 1623003890,
                        "moonrise": 1622941260,
                        "moonset": 1622989920,
                        "moon_phase": 0.88,
                        "temp": {
                            "day": 25.72,
                            "min": 16.7,
                            "max": 25.72,
                            "night": 18.44,
                            "eve": 23.69,
                            "morn": 17.17
                        },
                        "feels_like": {
                            "day": 25.73,
                            "night": 18.4,
                            "eve": 23.92,
                            "morn": 16.67
                        },
                        "pressure": 1016,
                        "humidity": 53,
                        "dew_point": 15.27,
                        "wind_speed": 2.22,
                        "wind_deg": 294,
                        "wind_gust": 2.57,
                        "weather": [
                            {
                                "id": 501,
                                "main": "Rain",
                                "description": "умерена киша",
                                "icon": "10d"
                            }
                        ],
                        "clouds": 75,
                        "pop": 0.8,
                        "rain": 11.15,
                        "uvi": 5.29
                    },
                    {
                        "dt": 1623060000,
                        "sunrise": 1623034427,
                        "sunset": 1623090332,
                        "moonrise": 1623028920,
                        "moonset": 1623080160,
                        "moon_phase": 0.91,
                        "temp": {
                            "day": 24.87,
                            "min": 16.2,
                            "max": 26.74,
                            "night": 18.32,
                            "eve": 24.71,
                            "morn": 16.2
                        },
                        "feels_like": {
                            "day": 24.77,
                            "night": 17.98,
                            "eve": 24.62,
                            "morn": 16.2
                        },
                        "pressure": 1017,
                        "humidity": 52,
                        "dew_point": 14.16,
                        "wind_speed": 5.25,
                        "wind_deg": 45,
                        "wind_gust": 6.33,
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "разбацани облаци",
                                "icon": "03d"
                            }
                        ],
                        "clouds": 27,
                        "pop": 0.61,
                        "uvi": 3.55
                    },
                    {
                        "dt": 1623146400,
                        "sunrise": 1623120809,
                        "sunset": 1623176773,
                        "moonrise": 1623116640,
                        "moonset": 1623170340,
                        "moon_phase": 0.94,
                        "temp": {
                            "day": 24.28,
                            "min": 16.19,
                            "max": 26.66,
                            "night": 18.84,
                            "eve": 24.33,
                            "morn": 16.19
                        },
                        "feels_like": {
                            "day": 24.02,
                            "night": 18.56,
                            "eve": 24.23,
                            "morn": 15.88
                        },
                        "pressure": 1017,
                        "humidity": 48,
                        "dew_point": 12.32,
                        "wind_speed": 3.22,
                        "wind_deg": 13,
                        "wind_gust": 5.21,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "clouds": 3,
                        "pop": 0.03,
                        "uvi": 7.66
                    },
                    {
                        "dt": 1623232800,
                        "sunrise": 1623207192,
                        "sunset": 1623263211,
                        "moonrise": 1623204600,
                        "moonset": 1623260580,
                        "moon_phase": 0.97,
                        "temp": {
                            "day": 24.32,
                            "min": 15.53,
                            "max": 26.64,
                            "night": 18.59,
                            "eve": 26.24,
                            "morn": 15.53
                        },
                        "feels_like": {
                            "day": 23.98,
                            "night": 18.25,
                            "eve": 26.24,
                            "morn": 15.04
                        },
                        "pressure": 1016,
                        "humidity": 45,
                        "dew_point": 11.62,
                        "wind_speed": 4.14,
                        "wind_deg": 31,
                        "wind_gust": 5.23,
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "ниски облаци",
                                "icon": "04d"
                            }
                        ],
                        "clouds": 89,
                        "pop": 0,
                        "uvi": 8
                    },
                    {
                        "dt": 1623319200,
                        "sunrise": 1623293578,
                        "sunset": 1623349648,
                        "moonrise": 1623292920,
                        "moonset": 1623350640,
                        "moon_phase": 0,
                        "temp": {
                            "day": 25.27,
                            "min": 16.26,
                            "max": 27.16,
                            "night": 18.59,
                            "eve": 25.03,
                            "morn": 16.26
                        },
                        "feels_like": {
                            "day": 25.21,
                            "night": 18.83,
                            "eve": 25.02,
                            "morn": 16.08
                        },
                        "pressure": 1013,
                        "humidity": 52,
                        "dew_point": 14.48,
                        "wind_speed": 1.89,
                        "wind_deg": 36,
                        "wind_gust": 2.84,
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "кишица",
                                "icon": "10d"
                            }
                        ],
                        "clouds": 74,
                        "pop": 1,
                        "rain": 5.66,
                        "uvi": 8
                    },
                    {
                        "dt": 1623405600,
                        "sunrise": 1623379966,
                        "sunset": 1623436083,
                        "moonrise": 1623381720,
                        "moonset": 1623440460,
                        "moon_phase": 0.03,
                        "temp": {
                            "day": 20.56,
                            "min": 17.38,
                            "max": 22.94,
                            "night": 18.56,
                            "eve": 22.94,
                            "morn": 17.38
                        },
                        "feels_like": {
                            "day": 20.68,
                            "night": 18.82,
                            "eve": 22.96,
                            "morn": 17.68
                        },
                        "pressure": 1012,
                        "humidity": 77,
                        "dew_point": 16.1,
                        "wind_speed": 1.89,
                        "wind_deg": 296,
                        "wind_gust": 2.85,
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "кишица",
                                "icon": "10d"
                            }
                        ],
                        "clouds": 100,
                        "pop": 1,
                        "rain": 7.98,
                        "uvi": 8
                    }
                ]
            },
            cityName:''
        }
        this.search = this.search.bind(this);
    }

    componentDidMount(){
        // console.log("componentDidMount u Weather48hContainer: "+this.props.searchPlace)
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.search(this.props.searchPlace);
        }else if(searchPlace!=null){
            this.search(searchPlace);
        }else{
            this.search('Novi Sad')
        }
    }

    async search(searchPlace){
        // await weatherService.getForecast7Days(searchPlace).then(res => 
            // {
                // console.log(res)
                // if(res.status==404){
                //     this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                // }else{
                    this.setState(
                        {
                            cityName:searchPlace,
                        }
                    )
                // }
            // }
        // );
    }

    render(){
        const content7Day = this.state.weather7Days!=='' && <Content7Days
                                                                cityName={this.state.cityName}
                                                                weather7Days={this.state.weather7Days} 
                                                            />
        const errorMessage = this.state.errorMessage!=='' && <ErrorMessage message = {this.state.errorMessage}/>
        return(
            <div>
                {content7Day}
                {errorMessage}
            </div>
        )
    }
}

export default Weather7DayContainer