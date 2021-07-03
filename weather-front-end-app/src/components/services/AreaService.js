
class AreaService{
    constructor(){
      this.url='http://localhost:8080/api/area'
    }
  
    getAreas(searchString){
      return fetch(`${this.url}?size=30&searchString=${searchString}`).then(res => res.json())
    }
  }
  
  export default AreaService