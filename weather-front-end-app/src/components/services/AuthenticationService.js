class AuthenticationService{
    constructor(){
      this.url='http://localhost:8080/api/users'
    }
  
    login(loginData){
        console.log(loginData);
    }

    register(registerData){
        console.log(registerData);
    }
  }
  
  export default AuthenticationService