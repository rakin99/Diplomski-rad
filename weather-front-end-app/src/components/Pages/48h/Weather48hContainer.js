import React, { Component } from 'react'
import Content48h from './Content48h';
import WeatherService from "../../services/WeatherService"
import ErrorMessage from '../../ErrorMessage';

var weatherService = new WeatherService();
class Weather48hContainer extends Component{

    constructor(){
        super();
        this.state = {
            numberPage:0,
            weather48h : ''
        }
        this.search = this.search.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
    }

    componentDidMount(){
        // console.log("componentDidMount u Weather48hContainer: "+this.props.searchPlace)
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.search(this.props.searchPlace,this.state.numberPage);
        }else if(searchPlace!=null){
            this.search(searchPlace,this.state.numberPage);
        }else{
            this.search('Novi Sad',this.state.numberPage)
        }
    }

    increaseNumberPage(){
        // console.log("increaseNumberPage: "+this.state.numberPage)
        if(this.state.numberPage < 1){
            // console.log("Prosao u if")
            this.search(this.state.weather48h.cityName,1);
        }
      }
    
    reduceNumberPage(){
        // console.log("reduceNumberPage: "+this.state.numberPage)
        if(this.state.numberPage>0){
            // console.log("Ulazim u if")
            this.search(this.state.weather48h.cityName,0);
        }
    }

    async search(searchPlace,numPage){
        await weatherService.getForecast48Hours(searchPlace,numPage).then(res => 
            {
                // console.log(res)
                if(res.status==404){
                    this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                }else{
                    this.setState(
                        {
                            weather48h:res,
                            numberPage:numPage
                        }
                    )
                }
            }
        );
    }

    render(){
        const content48h = this.state.weather48h!=='' && <Content48h 
                                                            cityName = {this.state.cityName} 
                                                            weather48h={this.state.weather48h} 
                                                            increaseNumberPage={this.increaseNumberPage} 
                                                            reduceNumberPage={this.reduceNumberPage}/>
        const errorMessage = this.state.errorMessage!=='' && <ErrorMessage message={this.state.errorMessage}/>;                                                    
        return(
            <div>
                {content48h}
                {errorMessage}
            </div>
        )
    }
    
}

export default Weather48hContainer