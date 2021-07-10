import React from "react"
import WeatherService from "../../services/WeatherService"
import CurrentWeather from "./CurrentWeather"
import ErrorMessage from "../../ErrorMessage";
import AuthenticationService from "../../services/AuthenticationService";

var weatherService = new WeatherService();
var authenticationService = new AuthenticationService();
class CurrentWeatherContainer extends React.Component{

    constructor(){
        super();
        this.state={
            searchPlace:'',
            currentWeather:'',
            forecast5Hours : '',
            icon:'',
            errorMessage:''
        }
        this.search=this.search.bind(this);
    }

    async componentDidMount(){
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.search(this.props.searchPlace)
        }else if(authenticationService.getUserFromStorage()!=null){
            await authenticationService.getLoggedUser().then(res =>{
                if(res.id>0){
                    this.search(res.lastSearchPlace);
                    this.props.search(res.lastSearchPlace);
                }else{
                    this.search(searchPlace);
                }
            });
        }
        else if(searchPlace!=null){
            // console.log("Else if")
            this.search(localStorage.getItem('searchPlace'))
        }else{
            this.search('Novi Sad') 
        }
    }

    async search(searchPlace){
        await weatherService.getCurrentWeather(searchPlace).then(res => 
            {
                if(res.status==404){
                    this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                }else{
                    this.setState(
                        {
                            currentWeather:res,
                            icon:"http://openweathermap.org/img/wn/"+res.weather[0].icon+'@2x.png',
                            searchPlace:searchPlace,
                        })
                }
            }
        );
        await weatherService.getForecast5Hours(searchPlace).then(res => 
            {
                this.setState(
                    {
                        forecast5Hours:res
                    }
                )
            }
        );
    }
    
    
    render(){
        const currentWeather = this.state.currentWeather !== '' && <CurrentWeather
                                                                            currentWeather = {this.state.currentWeather}
                                                                            forecast5Hours = {this.state.forecast5Hours}
                                                                            icon = {this.state.icon}
                                                                    />
        const errorMessage = this.state.errorMessage !== '' && <ErrorMessage h={2} message = {this.state.errorMessage} />
        return(
            <div>
                {currentWeather}
                {errorMessage}
            </div>
        )
    }
}

export default CurrentWeatherContainer 