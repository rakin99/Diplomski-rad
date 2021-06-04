import React, { Component } from 'react'

class AirPollutionContainer extends Component{

    constructor(){
        super();
        this.state = {
            biloSta:'',
        }
    }

    componentDidMount(){
        console.log("componentDidMount u AirPollution: "+this.props.searchPlace)
    }

    componentDidUpdate(){
        console.log("Update u AirPollution: "+this.props.searchPlace)
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Air pollution</h1>
            </div>
        )
    }
}

export default AirPollutionContainer