import React, { Component } from 'react'
import ErrorMessage from '../../ErrorMessage';
import WeatherService from '../../services/WeatherService';
import Content7Days from './Content7Days';

var weatherService = new WeatherService();
class Weather7DayContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            errorMessage:'',
            weather7Days : ''
        }
        this.search = this.search.bind(this);
    }

    componentDidMount(){
        // console.log("componentDidMount u Weather48hContainer: "+this.props.searchPlace)
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.search(this.props.searchPlace);
        }else if(searchPlace!=null){
            this.search(searchPlace);
        }else{
            this.search('Novi Sad')
        }
    }

    async search(searchPlace){
        await weatherService.getForecast7Days(searchPlace).then(res => 
            {
                console.log(res)
                if(res.status==404){
                    this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                }else{
                    this.setState(
                        {
                            weather7Days:res,
                        }
                    )
                }
            }
        );
    }

    render(){
        const content7Day = this.state.weather7Days!=='' && <Content7Days
                                                                cityName={this.state.cityName}
                                                                weather7Days={this.state.weather7Days} 
                                                            />
        const errorMessage = this.state.errorMessage!=='' && <ErrorMessage message = {this.state.errorMessage}/>
        return(
            <div>
                {content7Day}
                {errorMessage}
            </div>
        )
    }
}

export default Weather7DayContainer