import React, {Component, useState} from "react"
import AreaService from "./services/AreaService";
import AuthenticationService from "./services/AuthenticationService";

var authenticationService = new AuthenticationService();
var areasService = new AreaService();
class Register extends Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            repeatPassword:'',
            alerts:false,
            area:'',
            areas:[],
            errorMessage:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.searchAreas=this.searchAreas.bind(this);
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

    handleChange(event){
        if(event.target.type==='checkbox'){
            this.setState(prevState=>{
                const updateState=!prevState.alerts;
                this.props.changeChecked(updateState);
                return{
                    alerts:updateState
                }
            })
        }else{
            const {name,value} = event.target;
            this.setState({
                [name]:value
            })
        }
    }

    async handleSubmit(event){
        // console.log(JSON.stringify(this.state))
        var message=[];
        if(this.state.username.trim()===''){
            message.push("Unesite korisničko ime!")
        }
        if(this.state.password.trim()===''){
            message.push("Unesite lozinku!")
        }
        if(this.state.password.trim()!==this.state.repeatPassword.trim()){
            message.push("Lozinke se ne podudaraju!")
        }
        if(this.state.alerts==true && this.state.area===''){
            message.push("Izaberite okrug za koji želite da dobijate upozorenja!")
        }
        this.setState({
            errorMessage:message
        })
        if(message.length==0){
            this.props.handleClick(event);
            authenticationService.register({
                'username':this.state.username,
                'password':this.state.password,
                'alerts':this.state.alerts,
                'area':this.state.area
            }).then(res => 
                {   
                    // console.log("Res: "+JSON.stringify({
                    //         username: this.state.username,
                    //         roles: authenticationService.getRoles(res.value),
                    //         token: res.value
                    //     }))
                    
                    if(res.status!=500){
                        alert('Uspešno ste se registrovali!')
                    }
                }
            );
        }
    }

    render(){
        console.log(this.state.errorMessage.length)
        const listAreas = this.state.areas.length != 0 && this.state.areas.map(a=>{
            return <option key={a.id} value={a.name}></option>
        })
        const errorMessage = this.state.errorMessage.length!=0 && this.state.errorMessage.map(m=>{
                                                                                                return <p key={m} className="font-10pt mt-0 mb-0 text-danger"><b>{m}</b></p>
                                                                                            })
        const areas = this.state.alerts &&   <li className="mt-4">
                                                <p>Izaberite okrug za koji želite da dobijate upozorenja.</p>
                                                <input 
                                                    onFocus={this.searchAreas}
                                                    list='areas' 
                                                    name='area'
                                                    className='form-control form-control-sm col-9 d-inline'  
                                                    onKeyUp={this.searchAreas}
                                                />
                                                <datalist id='areas'>
                                                    {listAreas}
                                                </datalist>
                                            </li>
        return(
        <div className="align-middle" style={{
            backgroundColor:'white', 
            padding:'10px 10px 10px 10px'
            }}>
            <a className="close" href="#" onClick={(e)=>{
                                                    this.props.handleClick(e)
                                                    this.props.changeChecked(true)
                                                    }}/>
            <div onChange={this.handleChange}>
                <div className="new-member-inner">
                    <h2>Registracija</h2>
                    <ul className="form">
                        <li>
                            <label>Korisničko ime:</label>
                            <input type="text" name="username" defaultValue={this.state.username} className="form-control mr-sm-1" />
                        </li>								
                        <li>
                            <label>Lozinka:</label>
                            <input type="password" name="password" defaultValue={this.state.password} className="form-control mr-sm-1" />
                        </li>
                        <li>
                            <label>Ponovite lozinku:</label>
                            <input type="password" name="repeatPassword" defaultValue={this.state.repeatPassword} className="form-control mr-sm-1" />
                        </li>
                        <li>
                            <p className="form-check-label">Da li želite da dobijate upozorenja o vremenskim uslovima?</p>
                            <div className="text-center">
                                <input type="checkbox" name="alerts" id="alerts" defaultValue={this.state.alerts} className="form-check-input" />
                            </div>
                        </li>
                        {areas}
                    </ul>
                    {errorMessage}
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={(e) => {
                                                                    this.handleSubmit(e)
                                                                }}>Potvrdi</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register