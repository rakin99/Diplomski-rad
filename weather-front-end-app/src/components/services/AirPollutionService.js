
class AirPollutionService{
    constructor(){
      this.url='http://localhost:8080/api/air-pollution'
    }
  
    getAirPollution(searchPlace){
      return fetch(`${this.url}/current-pollution?searchPlace=${searchPlace}`).then(res => res.json())
    }

    getForecastAirPollution(searchPlace){
      return fetch(`${this.url}/forecast-pollution?searchPlace=${searchPlace}`).then(res => res.json())
    }
  }
  
  export default AirPollutionService