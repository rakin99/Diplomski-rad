import UserService from "./UserService";

var authenticationService = new UserService();
class WeatherService{
  constructor(){
    this.url='/api/weather';
  }

  getCurrentWeather(searchPlace){
    return fetch(`${this.url}/current-weather?searchPlace=${searchPlace}`,authenticationService.getConf()).then(res => res.json())
  }

  getForecast5Hours(searchPlace){
    return fetch(`${this.url}/forecast-5-hours?searchPlace=${searchPlace}`,authenticationService.getConf()).then(res => res.json())
  }

  getForecast48Hours(searchPlace,numPage){
    return fetch(`${this.url}/forecast-48-hours?searchPlace=${searchPlace}&numPage=${numPage}`,authenticationService.getConf()).then(res => res.json())
  }

  getForecast7Days(searchPlace){
    return fetch(`${this.url}/forecast-7-days?searchPlace=${searchPlace}`,authenticationService.getConf()).then(res => res.json())
  }
}

export default WeatherService