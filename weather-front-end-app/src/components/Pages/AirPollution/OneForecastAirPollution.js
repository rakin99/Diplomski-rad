import React from 'react'
import TimeConverter from '../../services/TimeConverter';

function OneForecastAirPollution(props){

    console.log(props)
    const timeConverter = new TimeConverter();
    const time=timeConverter.convertTime(props.forecast.dt);
    const date=timeConverter.convertTimeToDayAndMonth(props.forecast.dt);
    return(
        <div className="col-sm-2 ml-0 mt-2 text-left">
            <p className="font-10pt mb-0 mt-0 my-bg">{time} - {date}</p>
            <hr className='mb-0 mt-0' />
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    CO: {props.forecast.components.co} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    NO: {props.forecast.components.no} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    NO<sub>2</sub>: {props.forecast.components.no2} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    O<sub>3</sub>: {props.forecast.components.o3} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    SO<sub>2</sub>: {props.forecast.components.so2} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    PM<sub>2.5</sub>: {props.forecast.components.pm2_5} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    PM<sub>10</sub>: {props.forecast.components.pm10} 
                </div>
            </div>
            <div className="row text-left">
                <div className="col-sm-12 font-9pt">
                    NH<sub>3</sub>: {props.forecast.components.so2}
                </div>
            </div>
        </div>
    )
}

export default OneForecastAirPollution