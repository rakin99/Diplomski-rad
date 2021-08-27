import UserService from "./UserService";

var authenticationService = new UserService();
class IndicesService{
    constructor(){
      this.url='/api/indices'
    }
  
    getIndicesMosquito(areaName){
      return fetch(`${this.url}/mosquitoes?areaName=${areaName}`,authenticationService.getConf()).then(res => res.json())
    }

    getIndicesPollen(areaName){
      return fetch(`${this.url}/pollen?areaName=${areaName}`,authenticationService.getConf()).then(res => res.json())
    }
  }
  
  export default IndicesService