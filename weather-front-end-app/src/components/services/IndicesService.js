class IndicesService{
    constructor(){
      this.url='http://localhost:8080/api/indices'
    }
  
    getIndicesMosquito(areaName){
      return fetch(`${this.url}/mosquitoes?areaName=${areaName}`).then(res => res.json())
    }
  }
  
  export default IndicesService