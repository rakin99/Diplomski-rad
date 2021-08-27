import UserService from "./UserService";

var authenticationService = new UserService();
class AirPollutionService{
    constructor(){
      this.url='/api/air-pollution'
    }
  
    getAirPollution(searchPlace){
      return fetch(`${this.url}/current-pollution?searchPlace=${searchPlace}`,authenticationService.getConf()).then(res => res.json())
    }

    getForecastAirPollution(searchPlace){
      return fetch(`${this.url}/forecast-pollution?searchPlace=${searchPlace}`,authenticationService.getConf()).then(res => res.json())
    }
  }
  
  export default AirPollutionService