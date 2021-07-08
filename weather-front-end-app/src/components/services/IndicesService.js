import AuthenticationService from "./AuthenticationService";

var authenticationService = new AuthenticationService();
class IndicesService{
    constructor(){
      this.url='http://localhost:8080/api/indices'
    }
  
    getIndicesMosquito(areaName){
      return fetch(`${this.url}/mosquitoes?areaName=${areaName}`,authenticationService.getConf()).then(res => res.json())
    }

    getIndicesPollen(areaName){
      return fetch(`${this.url}/pollen?areaName=${areaName}`,authenticationService.getConf()).then(res => res.json())
    }
  }
  
  export default IndicesService