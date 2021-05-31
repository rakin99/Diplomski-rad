import React, { Component } from 'react'
import ContentCW from './ContentCW';
import Forecast5Hours from './Forecast5Hours';

class CurrentWeather extends Component{

    constructor(){
        super();
        this.timeConverter = this.timeConverter.bind(this);
    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours();
        var min = a.getMinutes()<10 ? '0'+a.getMinutes():a.getMinutes();
        var time = hour + ":" + min + 'h';
        return time;
      }

    render(){
        return(
            <div>
                <ContentCW 
                    timeConverter = {this.timeConverter} 
                    currentWeather = {this.props.currentWeather}
                    icon = {this.props.icon}
                />
                <Forecast5Hours timeConverter = {this.timeConverter} forecast5Hours = {this.props.forecast5Hours}/>
            </div>
        );
    }
}

export default CurrentWeather