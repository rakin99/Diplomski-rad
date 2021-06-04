import React from 'react'

function TBody7Days(props){

    var convert = require('cyrillic-to-latin')
    const weather = props.daily.map(d=> {
        return <td className="text-center font-7pt align-top" key={d.dt}>
                <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`}/>
                <p className="mb-0">{convert(d.weather[0].description)}</p>
            </td>
    })
    const temp = props.daily.map(d=> {
        return <td className="text-center font-9pt align-middle" key={d.dt}>
                    Min:{Math.round(d.temp.min)} °c
                    Max:{Math.round(d.temp.max)} °c
                </td>
    })
    const wind = props.daily.map(d=> {
        return <td className="text-center font-10pt align-middle" key={d.dt}>{Math.floor(d.wind_speed*10)/10} m/s</td>
    })
    const humidity = props.daily.map(d=> {
        return <td className="text-center font-10pt align-middle" key={d.dt}>{d.humidity}%</td>
    })
    const pressure = props.daily.map(d=> {
        return <td className="text-center font-10pt align-middle" key={d.dt}>{d.pressure}mb</td>
    })
    return(
        <tbody className="text-light">
            <tr className="row-h">
                <td className="align-middle"><b>Vreme</b></td>
                {weather}
            </tr>
            <tr>
                <td className="align-middle"><b>Temp.</b></td>
                {temp}
            </tr>
            <tr>
                <td className="align-middle"><b>Vetar</b></td>
                {wind}
            </tr>
            <tr>
                <td className="align-middle"><b>Vlažnost</b></td>
                {humidity}
            </tr>
            <tr>
                <td className="align-middle"><b>Pritisak</b></td>
                {pressure}
            </tr>
        </tbody>
    )

        
}

export default TBody7Days