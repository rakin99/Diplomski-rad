import React, { Component } from 'react'
import ContentCAP from './ContentCAP';
import ForecastAirPollution from './ForecastAirPollutin';

class CurrentAirPollution extends Component{

    render(){
        const forecastAirPollution = this.props.forecast!=='' && <ForecastAirPollution 
                                                                    forecast = {this.props.forecast}
                                                                    reduceNumberPage={this.props.reduceNumberPage}
                                                                    increaseNumberPage={this.props.increaseNumberPage}
                                                                />
        return(
            <div>
                <ContentCAP
                    currentAirPollution = {this.props.currentAirPollution}
                />
                {forecastAirPollution}
            </div>
        );
    }
}

export default CurrentAirPollution