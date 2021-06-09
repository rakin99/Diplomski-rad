import React, { Component } from 'react'
import AlertsService from '../services/AlertsService';
import AreaService from '../services/AreaService';
import IndicesService from '../services/IndicesService';
import TimeConverter from '../services/TimeConverter';

var areasService = new AreaService();
var alertsService = new AlertsService();
var indicesService = new IndicesService();
var timeConverter = new TimeConverter();
class AlertsIndicesContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            alerts:'',
            mosquitoActivity:[],
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
            areas:[],
            area:''
        }
        this.searchAreas=this.searchAreas.bind(this);
        this.getAlertsIndices=this.getAlertsIndices.bind(this);
        this.setArea=this.setArea.bind(this);
    }

    componentDidMount(){
        this.getAlertsIndices();
    }

    async searchAreas(event){
        const searchString = event.target.value;
        // console.log("Search string: "+searchString);
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

    setArea(event){
        const areaName = event.target.value;
        // console.log("Aread name:"+areaName);
        localStorage.setItem('areaName',areaName);
        this.setState({
            area:areaName
        })
    }

    async getAlertsIndices(){
        const areaName = localStorage.getItem('areaName');
        // console.log(areaName)
        if(this.state.area!=='' || areaName!=null){
            await alertsService.getAlerts(this.state.area!==''?this.state.area:areaName).then(res => 
                {   
                    // console.log(res)
                    this.setState(
                        {
                            alerts:res,
                            area:areaName
                        })
                }
            );
        }
        if(this.state.area!=='' || areaName!=null){
            await indicesService.getIndicesMosquito(this.state.area!==''?this.state.area:areaName).then(res => 
                {   
                    console.log(res)
                    this.setState(
                        {
                            mosquitoActivity:res
                        })
                }
            );
        }
    }

    render(){
        const effective_local = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && timeConverter.convertFromString(this.state.alerts.alerts[0].effective_local);
        const expires_local = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && timeConverter.convertFromString(this.state.alerts.alerts[0].expires_local);
        const alerts = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && <h6 className='mt-3 mb-0'><b>{effective_local} - {expires_local}</b></h6>;
        const alert = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && this.state.alerts.alerts[0].description.substring(this.state.alerts.alerts[0].description.indexOf('(sr):')+6);
        const pollen = this.state.pollen.map(p=>{
            return <p key={p.ID} className='mt-0 mb-0'>{p.Text}</p>
        })
        const areas = this.state.areas.length != 0 && this.state.areas.map(a=>{
                                                                                return <option key={a.id} value={a.name}></option>
                                                                            })
        const mosquitoActivity = this.state.mosquitoActivity.length!=0 && <span><h6 className='mb-0'><b>Aktivnost komaraca:</b></h6> <p>{this.state.mosquitoActivity[0].text}</p></span> ;
        return(
            <div className='float-right w-25'>
                <div className='alerts-indices-div'>
                    <input list="areas" className='form-control form-control-sm col-10 d-inline' defaultValue={this.state.area} onKeyUp={this.searchAreas} onBlur={this.setArea}/>
                    <button className='ml-1 btn-light rounded' onClick={this.getAlertsIndices}>✓</button>
                    <datalist id='areas'>
                        {areas}
                    </datalist>
                    {alerts}
                    <p>{alert}</p>
                    {mosquitoActivity}
                    <h6 className='mb-0'><b>Polen:</b></h6>
                    {pollen}
                </div>
            </div>
        )
    }
}

export default AlertsIndicesContainer