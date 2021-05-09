import React from 'react'
import { Route, Switch } from 'react-router'
import AirPollution from './Pages/AirPollution/AirPollutin'
import CurrentWeather from './Pages/CurrentWeather/CurrentWeather'
import Weather48h from './Pages/48h/Weather48h'
import Weather7Day from './Pages/7Day/Weather7Day'
import AlertsIndices from './Alerts-Indeces'

function Content(){
    return(
        <div className="main">
            <div className='float-left w-75 text-white'>
                <Switch>
                    <Route path="/" exact component={CurrentWeather}/>
                    <Route path="/current-weather" exact component={CurrentWeather}/>
                    <Route path="/48h-weather" component={Weather48h}/>
                    <Route path="/7-day-weather" component={Weather7Day}/>
                    <Route path="/air-pollution" component={AirPollution}/>
                </Switch>
            </div>
            <AlertsIndices />
        </div>
    )
}

export default Content