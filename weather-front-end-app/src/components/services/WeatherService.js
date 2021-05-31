
class WeatherService{
  constructor(){
    this.url='http://localhost:8080/api/weather'
  }

  getCurrentWeather(searchPlace){
    return fetch(`${this.url}/current-weather?searchPlace=${searchPlace}`).then(res => res.json())
  }

  getForecast5Hours(searchPlace){
    return fetch(`${this.url}/forecast-5-hours?searchPlace=${searchPlace}`).then(res => res.json())
  }
}

export default WeatherService