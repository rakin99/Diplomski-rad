import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import Mobile48h from './Mobile48h';
import Table48h from './Table48h';

class Content48h extends Component{

    render(){
        var timeConverter = new TimeConverter();
        return(
            <div className='h-50 pt-4 pl-5 d-inline-block'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            <b>{this.props.weather48h.cityName}</b>
                        </h2>
                    </div>
                    <div className="col-sm-5">
                        <div className="float-right">
                            <h4>
                                {timeConverter.convertTimeToDate(this.props.weather48h.date)}
                            </h4>
                        </div>
                    </div>
                </div>
                <Table48h 
                    
                    hourly={this.props.weather48h.hourly} 
                    increaseNumberPage={this.props.increaseNumberPage} 
                    reduceNumberPage={this.props.reduceNumberPage}
                />
                <Mobile48h  
                            hourly={this.props.weather48h.hourly} 
                            increaseNumberPage={this.props.increaseNumberPage} 
                            reduceNumberPage={this.props.reduceNumberPage}
                />
            </div>
        )
    }
}

export default Content48h