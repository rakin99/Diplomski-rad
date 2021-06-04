import React from 'react'

function TBody48h(props){
    var convert = require('cyrillic-to-latin')
    const weather = props.hourly.map(h=> {
        return <td className="text-center font-7pt align-top" key={h.dt}>
                <img src={`http://openweathermap.org/img/wn/${h.weather[0].icon}.png`}/>
                {convert(h.weather[0].description)}
            </td>
    })
    const temp = props.hourly.map(h=> {
        return <td className="text-center font-10pt align-middle" key={h.dt}>{Math.round(h.temp)} °c</td>
    })
    const wind = props.hourly.map(h=> {
        return <td className="text-center font-10pt align-middle" key={h.dt}>{Math.floor(h.wind_speed*10)/10} m/s</td>
    })
    const humidity = props.hourly.map(h=> {
        return <td className="text-center font-10pt align-middle" key={h.dt}>{h.humidity}%</td>
    })
    const pressure = props.hourly.map(h=> {
        return <td className="text-center font-10pt align-middle" key={h.dt}>{h.pressure}mb</td>
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

export default TBody48h