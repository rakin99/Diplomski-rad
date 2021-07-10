import React, { Component } from 'react'
import AlertsService from '../services/AlertsService';
import AreaService from '../services/AreaService';
import IndicesService from '../services/IndicesService';
import TimeConverter from '../services/TimeConverter';
import ErrorMessage from "../ErrorMessage";
import AuthenticationService from '../services/AuthenticationService';

var areasService = new AreaService();
var alertsService = new AlertsService();
var indicesService = new IndicesService();
var timeConverter = new TimeConverter();
var authenticationService = new AuthenticationService();
class AlertsIndicesContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            alerts:[],
            mosquitoActivity:[],
            pollen:[],
            areas:[],
            area:'',
            errorMessage:'',
            loggedIn:''
        }
        this.searchAreas=this.searchAreas.bind(this);
        this.getAlertsIndices=this.getAlertsIndices.bind(this);
        this.setArea=this.setArea.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.getAlerts=this.getAlerts.bind(this);
        this.getMosquito=this.getMosquito.bind(this);
        this.getPollen=this.getPollen.bind(this);
    }

    componentDidMount(){
        this.setState({
            loggedIn:this.props.loggedIn
        })
        this.getAlertsIndices();
    }

    async componentDidUpdate(){
        if(this.state.loggedIn.id!==this.props.loggedIn.id){
            console.log("Update prvi IF")
            this.setState({
                loggedIn:this.props.loggedIn
            })
            if(this.props.loggedIn.id>0){
                console.log("Update drugi IF")
                await authenticationService.getLoggedUser().then(res=>{
                    this.getAlerts(res.lastSearchArea!==''?res.lastSearchArea:localStorage.getItem('areaName'));
                    this.getMosquito(res.lastSearchArea!==''?res.lastSearchArea:localStorage.getItem('areaName'));
                    this.getPollen(res.lastSearchArea!==''?res.lastSearchArea:localStorage.getItem('areaName')); 
                })
            }else{
                this.getAlertsIndices()
            }
        }
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
        this.setState({
            area:areaName
        })
    }

    async clearInput(){
        // console.log("Clear input...")
        await areasService.getAreas('').then(res => 
            {   
                // console.log(res)
                this.setState(
                    {
                        area:'',
                        areas:res
                    })
            }
        );
    }

    async getAlertsIndices(){
        const areaName = this.state.area!==''?this.state.area:localStorage.getItem('areaName');
        if(this.props.loggedIn.id>0 && this.state.area===''){
            console.log("Prolazim if")
            await authenticationService.getLoggedUser().then(res=>{
                this.getAlerts(res.lastSearchArea);
                this.getMosquito(res.lastSearchArea);
                this.getPollen(res.lastSearchArea); 
            }) 
        }
        else if(areaName!=null && authenticationService.getLoggedUser()==null){
            await authenticationService.getLoggedUser().then(res=>{
                if(res.id===0){
                    console.log("Prolazim else1 if")
                    this.getAlerts(areaName);
                    this.getMosquito(areaName);
                    this.getPollen(areaName);
                }
            })
        }else if(areaName!=null && this.props.loggedIn.id!==undefined){
            console.log("Prolazim else2 if")
            this.getAlerts(areaName);
            this.getMosquito(areaName);
            this.getPollen(areaName);
        }
    }

    async getAlerts(areaName){
        await alertsService.getAlerts(areaName).then(res => 
            {   
                if(res.status!=500){
                    localStorage.setItem('areaName',areaName);
                    this.setState(
                        {
                            alerts:res,
                            area:areaName,
                            errorMessage:''
                        })
                }else{
                    this.setState({
                        alerts:[],
                        errorMessage:'Žao nam je, nema rezultata.'
                    })
                }
            }
        );
    }

    async getMosquito(areaName){
        await indicesService.getIndicesMosquito(areaName).then(res => 
            {   
                // console.log(res)
                if(res.status!=500){
                    this.setState(
                        {
                            mosquitoActivity:res,
                            errorMessage:''
                        })
                }else{
                    this.setState({
                        mosquitoActivity:[],
                        errorMessage:'Žao nam je, nema rezultata.'
                    })
                }
            }
        );
    }

    async getPollen(areaName){
        await indicesService.getIndicesPollen(areaName).then(res => 
            {   
                // console.log(res)
                if(res.status!=500){
                    this.setState(
                        {
                            pollen:res,
                            errorMessage:''
                        })
                }else{
                    this.setState({
                        pollen:[],
                        errorMessage:'Žao nam je, nema rezultata.'
                    })
                }
            }
        );
    }

    render(){
        const effective_local = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && timeConverter.convertFromString(this.state.alerts.alerts[0].effective_local);
        const expires_local = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && timeConverter.convertFromString(this.state.alerts.alerts[0].expires_local);
        const alerts = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && <h6 className='mt-3 mb-0'><b>{effective_local} - {expires_local}</b></h6>;
        const alert = (this.state.alerts!=='' && this.state.alerts.alerts!==undefined && this.state.alerts.alerts.length!==0) && this.state.alerts.alerts[0].description.substring(this.state.alerts.alerts[0].description.indexOf('(sr):')+6);
        const pollen = this.state.pollen.length!=0 && this.state.pollen.map(p=>{
            return <p key={p.id} className='mt-0 mb-0'>{p.text}</p>
        })
        const areas = this.state.areas.length != 0 && this.state.areas.map(a=>{
                                                                                return <option key={a.id} value={a.name}></option>
                                                                            })
        const mosquitoActivity = this.state.mosquitoActivity.length!=0 && <span><h6 className='mb-0'><b>Aktivnost komaraca:</b></h6> <p>{this.state.mosquitoActivity[0].text}</p></span> ;
        const indexPollen = this.state.pollen.length!=0 && <span><h6 className='mb-0'><b>Polen:</b></h6> {pollen}</span>;
        const errorMessage = this.state.errorMessage !== '' && <ErrorMessage h={6} message = {this.state.errorMessage} />
        return(
            <div className='float-right w-25'>
                <div className='alerts-indices-div'>
                    <input list="areas" className='form-control form-control-sm col-9 d-inline' value={this.state.area} onKeyUp={this.searchAreas} onChange={this.setArea} onFocus={this.searchAreas}/>
                    <button className='ml-1 btn-light rounded' onClick={this.getAlertsIndices}>✓</button>
                    <button className='ml-1 btn-light rounded' onClick={this.clearInput}>X</button>
                    <datalist id='areas'>
                        {areas}
                    </datalist>
                    {alerts}
                    <p>{alert}</p>
                    {mosquitoActivity}
                    {indexPollen}
                    {errorMessage}
                </div>
            </div>
        )
    }
}

export default AlertsIndicesContainer