
class AreaService{
    constructor(){
      this.url='/api/area'
    }
  
    getAreas(searchString){
      return fetch(`${this.url}?size=30&searchString=${searchString}`).then(res => res.json())
    }
  }
  
  export default AreaService