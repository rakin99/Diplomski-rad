import React from 'react'
import TimeConverter from '../../services/TimeConverter';

function ForecastAirPollution(props){
    const timeConverter = new TimeConverter();
    return(
        <div className='ml-5 mt-5 text-center font-10pt'>
            <h6 className="mb-0">{timeConverter.convertTime(props.forecast.dt)} - {timeConverter.convertTimeToDayAndMonth(props.forecast.dt)}</h6>
            <div className="row ml-5">
                <div className="col-sm-1 ml-5 mt-4">
                    <button className="page-link text-light btn-pagination btn-sm" onClick={()=>{props.reduceNumberPage()}}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    CO
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.co}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    NO
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.no}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    NO<sub>2</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.no2}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    O<sub>3</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.o3}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    SO<sub>2</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.so2}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    PM<sub>2.5</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.pm2_5}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    PM<sub>10</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.pm10}
                </div>
                <div className="col-sm-1 mt-3 pl-1 pr-1">
                    NH<sub>3</sub>
                    <hr className='mb-0 mt-0' />
                    {props.forecast.components.nh3}
                </div>
                <div className="col-sm-1 mt-4">
                    <button className="page-link text-light btn-pagination btn-sm" onClick={()=>{props.increaseNumberPage()}}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForecastAirPollution