import React, { Component } from 'react'
import AlertsService from '../services/AlertsService';
import AreaService from '../services/AreaService';

var areasService = new AreaService();
var alertsService = new AlertsService();
class AlertsIndicesContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            alerts:'',
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
            ],
            areas:[]
        }
        this.searchAreas=this.searchAreas.bind(this);
        this.getAlertsIndices=this.getAlertsIndices.bind(this);
    }

    async searchAreas(event){
        const searchString = event.target.value;
        console.log("Search string: "+searchString);
        await areasService.getAreas(searchString).then(res => 
            {   
                // console.log(res)
                this.setState(
                    {
                        areas:res
                    })
            }
        );
    }

    async getAlertsIndices(event){
        const areaName = event.target.value;
        console.log("Aread name:"+areaName);
        if(areaName!==''){
            await alertsService.getAlerts(areaName).then(res => 
                {   
                    console.log(res)
                    this.setState(
                        {
                            alerts:res
                        })
                }
            );
        }
    }

    render(){
        const alerts = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && <h6 className='mt-3 mb-0'><b>Upozorenja:</b></h6>;
        const alert = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && this.state.alerts.alerts[0].description.substring(this.state.alerts.alerts[0].description.indexOf('(sr):')+6);
        const pollen = this.state.pollen.map(p=>{
            return <p key={p.ID} className='mt-0 mb-0'>{p.Text}</p>
        })
        const areas = this.state.areas.length != 0 && this.state.areas.map(a=>{
                                                                                return <option key={a.id} value={a.name}></option>
                                                                            })
        return(
            <div className='float-right w-25'>
                <div className='alerts-indices-div'>
                    <input list="areas" className='form-control form-control-sm col-10' onKeyUp={this.searchAreas} onBlur={this.getAlertsIndices}/>
                    <datalist id='areas'>
                        {areas}
                    </datalist>
                    {alerts}
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

export default AlertsIndicesContainer