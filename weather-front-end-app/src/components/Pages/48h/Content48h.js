import React, { Component } from 'react'
import TimeConverter from '../../services/TimeConverter';
import Table48h from './Table48h';

class Content48h extends Component{

    constructor(){
        super();
        this.state = {
            date:''
        }
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(d){
        this.setState({
            date:d
        })
    }

    render(){
        var timeConverter = new TimeConverter();
        return(
            <div className='h-50 pt-4 pl-5 d-inline-block'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            <b>{this.props.cityName}</b>
                        </h2>
                    </div>
                    <div className="col-sm-5">
                        <div className="float-right">
                            <h4>
                                {timeConverter.convertTimeToDate(this.state.date)}
                            </h4>
                        </div>
                    </div>
                </div>
                <Table48h hourly={this.props.weather48h.hourly} updateDate={this.updateDate}/>
            </div>
        )
    }
}

export default Content48h