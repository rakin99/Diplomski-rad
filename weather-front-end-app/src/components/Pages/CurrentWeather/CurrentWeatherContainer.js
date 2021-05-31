import React from "react"
import CurrentWeatherService from "./CurrentWeatherService"
import CurrentWeather from "./CurrentWeather"
import ErrorMessage from "../../ErrorMessage";

var currentWeatherService = new CurrentWeatherService();
class CurrentWeatherContainer extends React.Component{

    constructor(){
        super();
        this.state={
            searchPlace:'',
            currentWeather:'',
            forecast5Hours : {
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
            icon:'',
            errorMessage:''
        }
        this.search=this.search.bind(this);
    }

    componentDidMount(){
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.search(this.props.searchPlace)
        }else if(searchPlace!=null){
            console.log("Else if")
            this.search(localStorage.getItem('searchPlace'))
        }else{
            this.search('Novi Sad') 
        }
    }

    async search(searchPlace){
        await currentWeatherService.getCurrentWeather(searchPlace).then(res => 
            {
                if(res.status==404){
                    this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                }else{
                    localStorage.setItem('searchPlace',searchPlace);
                    this.setState(
                        {
                            currentWeather:res,
                            icon:"http://openweathermap.org/img/wn/"+res.weather[0].icon+'@2x.png',
                            searchPlace:searchPlace,
                        })
                }
            });
    }
    
    render(){
        const currentWeather = this.state.currentWeather !== '' && <CurrentWeather
                                                                            currentWeather = {this.state.currentWeather}
                                                                            forecast5Hours = {this.state.forecast5Hours}
                                                                            icon = {this.state.icon}
                                                                    />
        const errorMessage = this.state.errorMessage !== '' && <ErrorMessage message = {this.state.errorMessage} />
        return(
            <div>
                {currentWeather}
                {errorMessage}
            </div>
        )
    }
}

export default CurrentWeatherContainer 