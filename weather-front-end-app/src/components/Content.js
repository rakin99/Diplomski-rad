import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import AirPollution from './Pages/AirPollution/AirPollutin'
import Weather7Day from './Pages/7Day/Weather7Day'
import AlertsIndices from './Alerts-Indeces'
import CurrentWeatherContainer from './Pages/CurrentWeather/CurrentWeatherContainer'
import Weather48hContainer from './Pages/48h/Weather48hContainer'

class Content extends Component{

    constructor(){
        super();
    }

    componentDidUpdate(){
        // console.log("Mesto u Content: "+this.props.mesto)
    }

    render(){
        const renderMergedProps = (component, ...rest) => {
            // console.log(JSON.stringify(rest))
            // console.log(JSON.stringify(component))
            const finalProps = Object.assign({}, ...rest);
            // console.log(JSON.stringify(finalProps))
            return (
              React.createElement(component, finalProps)
            );
          }

        const PropsRoute = ({ component, ...rest }) => {
            return (
              <Route {...rest} render={routeProps => {
                // console.log(JSON.stringify(rest))
                // console.log(JSON.stringify(component))
                // console.log(JSON.stringify(routeProps))
                return renderMergedProps(component, routeProps, rest);
              }}/>
            );
          }

        return(
            <div className="main">
                <div className='float-left w-75 text-white'>
                    <Switch>
                        <PropsRoute path="/" exact component={CurrentWeatherContainer} searchPlace = {this.props.searchPlace}/>
                        <PropsRoute path="/current-weather" component={CurrentWeatherContainer} searchPlace = {this.props.searchPlace}/>
                        <PropsRoute path="/48h-weather" component={Weather48hContainer} searchPlace = {this.props.searchPlace}/>
                        <PropsRoute path="/7-day-weather" component={Weather7Day}/>
                        <PropsRoute path="/air-pollution" component={AirPollution} searchPlace = {this.props.searchPlace}/>
                    </Switch>
                </div>
                <AlertsIndices />
            </div>
        )
    }
}

export default Content