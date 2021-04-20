import React from 'react'
import { Route, Switch } from 'react-router'
import AirPollution from './Pages/AirPollutin'
import CurrentWeather from './Pages/CurrentWeather'
import Weather48h from './Pages/Weather48h'
import Weather7Day from './Pages/Weather7Day'

function Content(){
    return(
        <div className="main">
            <Switch>
                <Route path="/" exact component={CurrentWeather}/>
                <Route path="/current-weather" exact component={CurrentWeather}/>
                <Route path="/48h-weather" component={Weather48h}/>
                <Route path="/7-day-weather" component={Weather7Day}/>
                <Route path="/air-pollution" component={AirPollution}/>
            </Switch>
        </div>
    )
}

export default Content