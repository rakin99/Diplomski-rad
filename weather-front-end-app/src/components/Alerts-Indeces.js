import React, { Component } from 'react'

class AlertsIndices extends Component{
    
    constructor(){
        super();
        this.state = {
            alerts:{
                "country_code": "RS",
                "lon": 19.84,
                "timezone": "Europe/Belgrade",
                "lat": 45.25,
                "alerts": [
                    {
                        "regions": [
                            "Бачка,RS"
                        ],
                        "ends_utc": "2021-05-09T23:00:00",
                        "effective_local": "2021-05-09T01:00:00",
                        "onset_utc": "2021-05-08T23:00:00",
                        "expires_local": "2021-05-10T01:00:00",
                        "expires_utc": "2021-05-09T23:00:00",
                        "ends_local": "2021-05-10T01:00:00",
                        "uri": "https://meteoalarm.org?geocode=EMMA_ID:RS002",
                        "onset_local": "2021-05-09T01:00:00",
                        "effective_utc": "2021-05-08T23:00:00",
                        "severity": "Advisory",
                        "title": "Extreme Low Temperature",
                        "description": "English(en-GB): Ground frost Damage to agriculture – vegetable, vineyards and fruit are especially vulnerable. Unfavourable conditions for chronically sick, people under therapy and medical control or meteoropaths.\nSerbian(sr): Prizemni mraz Štete u poljoprivredi - povrćarstvo, vinogradarstvo i voćarstvo, posebno su ugroženi. Nepovoljni vremenski uslovi za hronične bolesnike, ljudi pod terapijom, medicinskom kontrolom ili meteoropate."
                    }
                ],
                "city_name": "Novi Sad",
                "state_code": "VO"
            },
            mosquitoActivity:{
                "Name": "Prognoza za aktivnost komaraca",
                "ID": 17,
                "Ascending": true,
                "LocalDateTime": "2021-05-09T07:00:00+02:00",
                "EpochDateTime": 1620536400,
                "Value": 0.0,
                "Category": "Nisko",
                "CategoryValue": 1,
                "Text": "Zbog vremenskih uslova aktivnost komaraca će biti niska.",
                "MobileLink": "http://m.accuweather.com/sr/rs/novi-sad/298486/mosquito-activity-weather/298486",
                "Link": "http://www.accuweather.com/sr/rs/novi-sad/298486/mosquito-activity-weather/298486"
            },
            pollen:[
                {
                    "Name": "Polen drveća",
                    "ID": -14,
                    "Ascending": false,
                    "LocalDateTime": "2021-05-09T07:00:00+02:00",
                    "EpochDateTime": 1620536400,
                    "Value": 1.0,
                    "Category": "Nisko",
                    "CategoryValue": 1,
                    "Text": "Nivo polena drveća će biti nizak.",
                    "MobileLink": "http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486",
                    "Link": "http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486"
                },
                {
                    "Name": "Polen ambrozije",
                    "ID": -13,
                    "Ascending": false,
                    "LocalDateTime": "2021-05-09T07:00:00+02:00",
                    "EpochDateTime": 1620536400,
                    "Value": 1.0,
                    "Category": "Nisko",
                    "CategoryValue": 1,
                    "Text": "Nivo polena ambrozije će biti nizak.",
                    "MobileLink": "http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486",
                    "Link": "http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486"
                },
                {
                    "Name": "Plesan",
                    "ID": -12,
                    "Ascending": false,
                    "LocalDateTime": "2021-05-09T07:00:00+02:00",
                    "EpochDateTime": 1620536400,
                    "Value": 1.0,
                    "Category": "Nisko",
                    "CategoryValue": 1,
                    "Text": "Nivo buđi će biti nizak.",
                    "MobileLink": "http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486",
                    "Link": "http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486"
                },
                {
                    "Name": "Polen iz trave",
                    "ID": -11,
                    "Ascending": false,
                    "LocalDateTime": "2021-05-09T07:00:00+02:00",
                    "EpochDateTime": 1620536400,
                    "Value": 1.0,
                    "Category": "Nisko",
                    "CategoryValue": 1,
                    "Text": "Nivo polena iz trave će biti nizak.",
                    "MobileLink": "http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486",
                    "Link": "http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486"
                }
            ]
        }
    }

    render(){
        const alert = this.state.alerts.alerts[0].description.substring(this.state.alerts.alerts[0].description.indexOf('(sr):')+6);
        const pollen = this.state.pollen.map(p=>{
            return <p key={p.ID} className='mt-0 mb-0'>{p.Text}</p>
        })
        return(
            <div className='float-right w-25'>
                <div className='alerts-indices-div'>
                    <input list="cities" className='form-control form-control-sm col-10'/>
                    <datalist id='cities'>
                        <option value='Novi Sad'></option>
                        <option value='Beograd'></option>
                    </datalist>
                    <h6 className='mt-3 mb-0'><b>Upozorenja:</b></h6>
                    <p>{alert}</p>
                    <h6 className='mb-0'><b>Aktivnost komaraca:</b></h6>
                    <p>{this.state.mosquitoActivity.Text}</p>
                    <h6 className='mb-0'><b>Polen:</b></h6>
                    {pollen}
                </div>
            </div>
        )
    }
}

export default AlertsIndices