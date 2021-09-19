import React from 'react'
import TimeConverter from '../../services/TimeConverter';
import ForecaastAirPollution from './ForecastAirPollutin';

function ContentCAP(props){
    const timeConverter = new TimeConverter();
    const time = timeConverter.convertTime(props.currentAirPollution.list[0].dt);
    const date = timeConverter.convertTimeToDate(props.currentAirPollution.list[0].dt);
    const airDesc = ['vrlo dobar','dobar','umeren','loš','vrlo loš'];
    const colorText = ['darkgreen','lightgreen','yellow','orange','red']
    return(
        <div className='h-50 pt-4 pl-5 no-padding'>
            <div className="row ">
                <div className="col-sm-6">
                    <h2>
                        <b>{props.currentAirPollution.cityName}</b>
                    </h2>
                </div>
                <div className="col-sm-5"> 
                    <div className="float-right">
                        <h4>{time} - {date}</h4>
                    </div>
                </div>
            </div>
             <div className='pl-4 mt-3 no-padding'>
                <h4>
                    Kvalitet vazduha: 
                    <b className={colorText[props.currentAirPollution.list[0].main.aqi-1]}> {airDesc[props.currentAirPollution.list[0].main.aqi-1]}</b>
                </h4>
            </div>
            <div className='pl-4 mt-3 row no-padding'>
                <div className="ml-4 mt-3 col-sm-5">
                    <h6>
                        <b>Ugljen monoksid (CO): </b>
                        {props.currentAirPollution.list[0].components.co}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
                <div className="col-sm-5 mt-3">
                    <h6>
                        <b>Azot monoksid (NO): </b>
                        {props.currentAirPollution.list[0].components.no}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
            </div>
            <div className='pl-4 mt-2 row no-padding'>
                <div className="ml-4 col-sm-5">
                    <h6>
                        <b>Azot dioksid (NO<sub>2</sub>): </b>
                        {props.currentAirPollution.list[0].components.no2}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
                <div className="col-sm-5">
                    <h6>
                        <b>Ozon (O<sub>3</sub>): </b>
                        {props.currentAirPollution.list[0].components.o3}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
            </div>
            <div className='pl-4 mt-2 row no-padding'>
                <div className="ml-4 col-sm-5">
                    <h6>
                        <b>Sumpor dioksid (SO<sub>2</sub>): </b>
                        {props.currentAirPollution.list[0].components.so2}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
                <div className="col-sm-5">
                    <h6>
                        <b>Sitne čestice (PM<sub>2.5</sub>): </b>
                        {props.currentAirPollution.list[0].components.pm2_5}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
            </div>
            <div className='pl-4 mt-2 row no-padding'>
                <div className="ml-4 col-sm-5">
                    <h6>
                        <b>Grube čestice (PM<sub>10</sub>): </b>
                        {props.currentAirPollution.list[0].components.pm10}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
                <div className="col-sm-5">
                    <h6>
                        <b>Amonijak (NH<sub>3</sub>): </b>
                        {props.currentAirPollution.list[0].components.nh3}<span className="font-10pt"> μg/m<sup>3</sup></span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default ContentCAP