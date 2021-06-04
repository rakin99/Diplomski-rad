import React from 'react'

function TBodyAirPollution(props){
    const airDesc = ['vrlo dobar','dobar','umeren','loš','vrlo loš']
    const quality  = props.forecast.map(f=> {
        return <td className="text-center font-7pt" key={f.dt}>
                {airDesc[f.main.aqi-1]}
            </td>
    })
    const co = props.forecast.map(f=> {
        return <td className="text-center font-7pt" key={f.dt}>{f.components.co}</td>
    })
    // const wind = props.forecast.map(f=> {
    //     return <td className="text-center font-10pt align-middle" key={f.dt}>{Math.floor(f.wind_speed*10)/10} m/s</td>
    // })
    // const humidity = props.forecast.map(f=> {
    //     return <td className="text-center font-10pt align-middle" key={f.dt}>{f.humidity}%</td>
    // })
    // const pressure = props.forecast.map(f=> {
    //     return <td className="text-center font-10pt align-middle" key={f.dt}>{f.pressure}mb</td>
    // })
    return(
        <tbody className="text-light font-7pt">
            <tr>
                <td><b>Kvalitet vazduha</b></td>
                {quality}
            </tr>
            <tr>
                <td><b>CO</b></td>
                {co}
            </tr>
            <tr>
                <td><b>NO</b></td>
                {quality}
            </tr>
            <tr>
                <td><b>NO<sub>2</sub></b></td>
                {quality}
            </tr>
            <tr>
                <td><b>O<sub>3</sub></b></td>
                {quality}
            </tr>
            <tr>
                <td><b>SO<sub>2</sub></b></td>
                {quality}
            </tr>
            <tr>
                <td><b>PM<sub>2.5</sub></b></td>
                {quality}
            </tr>
            <tr>
                <td><b>PM<sub>10</sub></b></td>
                {quality}
            </tr>
            <tr>
                <td><b>NH<sub>3</sub></b></td>
                {quality}
            </tr>
        </tbody>
    )
}
export default TBodyAirPollution