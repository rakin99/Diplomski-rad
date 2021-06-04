import React, { Component } from 'react'
import AirPollutionService from '../../services/AirPollutionService';
import CurrentAirPollution from './CurrentAirPollution';
import ErrorMessage from "../../ErrorMessage";

var airPollutionService = new AirPollutionService();
class AirPollutionContainer extends Component{

    constructor(){
        super();
        this.state = {
            currentAirPollution:'',
            forecastAirPollution:'',
            forecastsAirPollution:'',
            errorMessage:'',
            numberPage:0
        }
        this.increaseNumberPage = this.increaseNumberPage.bind(this);
        this.reduceNumberPage = this.reduceNumberPage.bind(this);
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

    increaseNumberPage(){
        // console.log("increaseNumberPage: "+this.state.forecastsAirPollution[this.state.numberPage+1])
        if(this.state.numberPage < 16){
            // console.log("Prosao u if")
            const num = this.state.numberPage + 1;
            this.setState({
                forecastAirPollution:this.state.forecastsAirPollution[num],
                numberPage:num
            })
        }
      }
    
    reduceNumberPage(){
        // console.log("reduceNumberPage: "+this.state.forecastsAirPollution[this.state.numberPage-1])
        if(this.state.numberPage>0){
            const num = this.state.numberPage - 1;
            this.setState({
                forecastAirPollution:this.state.forecastsAirPollution[num],
                numberPage:num
            })
        }
    }

    async search(searchPlace){
        await airPollutionService.getAirPollution(searchPlace).then(res => 
            {
                if(res.status==404){
                    this.setState({errorMessage:'Žao nam je, nema rezultata.'});
                }else{
                    this.setState(
                        {
                            currentAirPollution:res,
                        }
                    )
                }
            }
        );
        await airPollutionService.getForecastAirPollution(searchPlace).then(res => 
            {
                // console.log(res)
                this.setState(
                    {
                        forecastsAirPollution:res.list,
                        forecastAirPollution:res.list[this.state.numberPage],
                    }
                )
            }
        );
    }

    render(){
        const currentAirPollution = this.state.currentAirPollution!=='' && <CurrentAirPollution 
                                                                                currentAirPollution = {this.state.currentAirPollution}
                                                                                forecast = {this.state.forecastAirPollution}
                                                                                reduceNumberPage={this.reduceNumberPage}
                                                                                increaseNumberPage={this.increaseNumberPage}
                                                                            />
        const errorMessage = this.state.errorMessage!=='' && <ErrorMessage
                                                                                message = {this.state.errorMessage}
                                                                            />
        return(
            <div>
                {currentAirPollution}
                {errorMessage}
            </div>
        )
    }
}

export default AirPollutionContainer