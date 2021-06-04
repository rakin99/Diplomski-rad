import React, { Component } from 'react'
import Table7Days from './Table7Days'

class Content7Days extends Component{

    render(){
        return(
            <div className='h-50 pt-4 pl-5 d-inline-block'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            <b>{this.props.cityName}</b>
                        </h2>
                    </div>
                </div>
                <Table7Days 
                    daily={this.props.weather7Days.daily}
                />
            </div>
        )
    }
}

export default Content7Days