import React, {Component, useState} from "react"
import AreaService from "./services/AreaService";
import UserService from "./services/UserService";
import Modal from 'react-awesome-modal';

var userService = new UserService();
var areasService = new AreaService();
class Register extends Component{

    constructor(props){
        super(props)
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
        this.check=this.check.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    async searchAreas(event){
        const searchString = event.target.value;
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

    async componentDidMount(){
        if(this.props.searchUser.editUser){
            await userService.getUserByEamil(0,this.props.searchUser.value).then(res=>{
                console.log(res)
                const user = res[0];
                this.setState({
                    username:user.username,
                    alerts:user.alerts,
                    area:user.area
                })
            });
        }
        else if(this.props.settings){
            await userService.getLoggedUser().then(res=>{
                this.setState({
                    username:res.username,
                    alerts:res.alerts,
                    area:res.area
                })
            })
        }
    }

    handleChange(event){
        if(event.target.type!=='checkbox'){
            const {name,value} = event.target;
            this.setState({
                [name]:value
            })
        }
    }

    check(){
        this.setState(prevState=>{
            const updateState=!prevState.alerts;
            this.props.changeChecked(updateState);
            return{
                alerts:updateState
            }
        })
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async handleSubmit(event){
        // console.log(JSON.stringify(this.state))
        var message=[];
        if(this.state.username.trim()===''){
            message.push("Unesite korisničko ime!")
        }else if(this.state.username.trim()!=='' && !this.validateEmail(this.state.username.trim())){
            message.push("E-mail adresa nije validna!")
        }
        if(this.state.password.trim()==='' && !this.props.settings){
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
            if(!this.props.settings){
                console.log("Register")
                userService.register({
                    'username':this.state.username,
                    'password':this.state.password,
                    'alerts':this.state.alerts,
                    'area':this.state.area
                }).then(res => 
                    {   
                        if(res.status!=500){
                            this.props.setNotice("noticeRegister",true,"Uspešno ste se registrovali!")
                        }
                    }
                );
            }else if(this.props.searchUser.editUser){
                console.log("Edit user")
                userService.adminEdit({
                    'username':this.state.username,
                    'password':this.state.password,
                    'alerts':this.state.alerts,
                    'area':this.state.area
                }).then(res => 
                    {   
                        if(res.status!=500){
                            this.props.setNotice("noticeRegister",true,"Ažuriranje je uspešno!")
                        }
                    }
                );
            }else{
                console.log("Settings")
                userService.edit({
                    'username':this.state.username,
                    'password':this.state.password,
                    'alerts':this.state.alerts,
                    'area':this.state.area
                }).then(res => 
                    {   
                        if(res.status!=500){
                            this.props.setNotice("noticeRegister",true,"Ažuriranje je uspešno!")
                        }
                    }
                );
            }
            this.props.handleClick(event);
        }
    }

    render(){
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
                                                    defaultValue={this.state.area}
                                                />
                                                <datalist id='areas'>
                                                    {listAreas}
                                                </datalist>
                                            </li>
        const head = this.props.settings? <h2>Podešavanja</h2>:<h2>Registracija</h2>
        const username = this.props.settings? <input type="text" readOnly name="username" defaultValue={this.state.username} className="form-control mr-sm-1" />:
                                                            <input type="text" name="username" defaultValue={this.state.username} className="form-control mr-sm-1" />
        return(
            <Modal
                    visible={this.props.register}
                    width="470px"
                    height="340px"
                    effect="fadeInUp"
                    onClickAway={(e)=>{
                        this.props.handleClick(e)
                        this.props.setSearchUser('',false,false)
                    }}
					    >
                <div className="align-middle" style={{
                    backgroundColor:'white', 
                    padding:'10px 10px 10px 10px'
                    }}>
                    <a className="close" href="#" onClick={(e)=>{
                                                            this.props.handleClick(e)
                                                            this.props.changeChecked(true)
                                                            this.props.setSearchUser('',false,false)
                                                            }}/>
                    <div onChange={this.handleChange}>
                        <div className="new-member-inner">
                            {head}
                            <ul className="form">
                                <li>
                                    <label>E-mail:</label>
                                    {username}
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
                                        <input type="checkbox" name="alerts" id="alerts" checked={this.state.alerts} onChange={this.check} />
                                    </div>
                                </li>
                                {areas}
                            </ul>
                            {errorMessage}
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={(e) => {
                                                                            this.handleSubmit(e)
                                                                        }} id="submitUser">Potvrdi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Register