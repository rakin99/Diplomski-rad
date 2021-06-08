class AlertsService{
    constructor(){
      this.url='http://localhost:8080/api/alerts-indices'
    }
  
    getAlerts(areaName){
      return fetch(`${this.url}?areaName=${areaName}`).then(res => res.json())
    }
  }
  
  export default AlertsService