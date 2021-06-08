import React from 'react'

function AlertsIndicesContent(props){
    const alerts = (props.alerts!=undefined && props.alerts.alerts.length!==0) && <h6 className='mt-3 mb-0'><b>Upozorenja:</b></h6>;
    const alert = (props.alerts!=undefined && props.alerts.alerts.length!==0) && props.alerts.alerts[0].description.substring(props.alerts.alerts[0].description.indexOf('(sr):')+6);
    const areas = props.areas.length != 0 && props.areas.map(a=>{
        return <option key={a.id} value={a.name}></option>
    })
    return(
        <div>
            <input list="areas" className='form-control form-control-sm col-10' onKeyUp={props.searchAreas} onBlur={props.getAlertsIndices}/>
            <datalist id='areas'>
                {areas}
            </datalist>
            {alerts}
            <p>{alert}</p>
        </div>
    )
}
export default AlertsIndicesContent