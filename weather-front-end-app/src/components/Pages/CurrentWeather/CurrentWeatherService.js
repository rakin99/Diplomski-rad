
class ClientsService{
  constructor(){
    this.url='http://localhost:8080/api/weather'
  }

  getCurrentWeather(searchPlace){
    return fetch(`${this.url}/current-weather?searchPlace=${searchPlace}`).then(res => res.json())
  }
}

export default ClientsService