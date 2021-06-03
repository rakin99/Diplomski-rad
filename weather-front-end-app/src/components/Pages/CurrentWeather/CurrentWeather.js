import React, { Component } from 'react'
import ContentCW from './ContentCW';
import Forecast5Hours from './Forecast5Hours';

class CurrentWeather extends Component{

    constructor(){
        super();
    }

    render(){
        const forecast5Hours = this.props.forecast5Hours!=='' && <Forecast5Hours forecast5Hours = {this.props.forecast5Hours}/>;
        return(
            <div>
                <ContentCW 
                    currentWeather = {this.props.currentWeather}
                    icon = {this.props.icon}
                />
                {forecast5Hours}
            </div>
        );
    }
}

export default CurrentWeather