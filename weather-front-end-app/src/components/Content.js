import React from 'react'
import { Route, Switch } from 'react-router'
import AirPollution from './Pages/AirPollution/AirPollutin'
import CurrentWeather from './Pages/CurrentWeather/CurrentWeather'
import Weather48h from './Pages/48h/Weather48h'
import Weather7Day from './Pages/7Day/Weather7Day'

function Content(){
    return(
        <div className="main">
            <div className='float-left w-50'>
                <Switch>
                    <Route path="/" exact component={CurrentWeather}/>
                    <Route path="/current-weather" exact component={CurrentWeather}/>
                    <Route path="/48h-weather" component={Weather48h}/>
                    <Route path="/7-day-weather" component={Weather7Day}/>
                    <Route path="/air-pollution" component={AirPollution}/>
                </Switch>
            </div>
            <div className='float-right w-50'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default Content