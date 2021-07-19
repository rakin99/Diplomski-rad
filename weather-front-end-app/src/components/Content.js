import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Weather7DayContainer from './Pages/7Day/Weather7DayContainer'
import CurrentWeatherContainer from './Pages/CurrentWeather/CurrentWeatherContainer'
import Weather48hContainer from './Pages/48h/Weather48hContainer'
import AirPollutionContainer from './Pages/AirPollution/AirPollutionContainer'
import AlertsIndicesContainer from './AlertIndices/Alerts-IndicesContainer'
import Login from './Login'
import Modal from 'react-awesome-modal';
import Register from './Register'
import AuthenticationService from './services/AuthenticationService'
import { Redirect } from 'react-router-dom'
import UsersContainer from './Pages/Users/UsersContainer'
import Notice from './Notice'

var authenticationService = new AuthenticationService();
class Content extends Component{

    constructor(){
        super();
        this.state={
          isChecked:true
        }
        this.changeChecked=this.changeChecked.bind(this);
    }

    changeChecked(value){
      this.setState({
        isChecked:value
      })
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

        const PrivateRoute = ({ component, roles, ...rest }) => {
          return(
            <Route {...rest} render={props => {
              const currentUser = authenticationService.getUserFromStorage();
              if (currentUser===null ) {
                  // not logged in so redirect to login page with the return url
                  return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
              }
              
              // check if route is restricted by role
              if(roles && roles.indexOf(currentUser.roles[0][0].authority) === -1){
                return <Redirect to={{ pathname: '/' }} />
              }
              // authorised so return component
              return renderMergedProps(component, props, rest);
            }} />
          )
        }

        const login = this.props.login && <Login 
                          handleClick={this.props.handleClick}
                          getLoggedUser={this.props.getLoggedUser}
                        />
        const register = this.props.register && <Register
                          handleClick={this.props.handleClick}
                          changeChecked={this.changeChecked}
                          settings={this.props.settings}
                          setNotice = {this.props.setNotice}
                        />
        return(
          <div className="main my_main">
              <Modal
                    visible={this.props.login}
                    width="470px"
                    height="300px"
                    effect="fadeInUp"
                    onClickAway={this.props.handleClick}
					    >
						    {login}
              </Modal>
              <Modal
                    visible={this.props.register}
                    width="470px"
                    height={!this.state.isChecked ? "430px":"340px"}
                    effect="fadeInUp"
                    onClickAway={this.props.handleClick}
					    >
						    {register}
              </Modal>
              <Notice
                    notice = {this.props.notice.noticeRegister}
                    message = {this.props.notice.message}
                    setNotice = {this.props.setNotice}
                    mode = "noticeRegister"
                />
              <div className='float-left w-75 text-white'>
                  <Switch>
                      <PrivateRoute 
                          component={UsersContainer} 
                          roles="ROLE_ADMIN" 
                          path="/users"
                          notice = {this.props.notice}
                          setNotice = {this.props.setNotice}
                          setSearchUser = {this.props.setSearchUser}
                          searchUser = {this.props.searchUser}
                        />
                      <PropsRoute
                          path="/" 
                          exact 
                          component={CurrentWeatherContainer} 
                          searchPlace = {this.props.searchPlace}
                          search={this.props.search}
                        />
                      <PropsRoute 
                          path="/current-weather" 
                          component={CurrentWeatherContainer} 
                          searchPlace = {this.props.searchPlace}
                          search={this.props.search}
                        />
                      <PropsRoute 
                          path="/48h-weather" 
                          component={Weather48hContainer} 
                          searchPlace = {this.props.searchPlace}
                        />
                      <PropsRoute 
                          path="/7-day-weather" 
                          component={Weather7DayContainer} 
                          searchPlace = {this.props.searchPlace}
                        />
                      <PropsRoute 
                          path="/air-pollution" 
                          component={AirPollutionContainer} 
                          searchPlace = {this.props.searchPlace}
                        />
                  </Switch>
              </div>
              <AlertsIndicesContainer
                loggedIn={this.props.loggedIn}
              />
            </div>
        )
    }
}

export default Content