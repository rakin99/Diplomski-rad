class AuthenticationService{
    constructor(){
      this.url='http://localhost:8080/api/user';
    }
  
    login(loginData){
        // console.log(loginData);
        var conf={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
          };
        return fetch(`${this.url}/login`,conf).then(res => res.json());
    }

    logout(){
      localStorage.setItem('loggedUser',null);
    }

    register(registerData){
        // console.log(registerData);
        var conf={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
          };
        return fetch(`${this.url}/register`,conf).then(res => res.json());
    }

    getRoles(token) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
    
        return [decodedJwtData.roles];
    }

    getLoggedUser() {
        // var user = localStorage.getItem('loggedUser');
        return fetch(`${this.url}/get-logged-user`,this.getConf()).then(res => res.json());
    }

    getUserFromStorage(){
      var user = JSON.parse(localStorage.getItem('loggedUser'));
      return user;
    }

    getConf() {
      var user = localStorage.getItem('loggedUser');
      var token = null;
      if(user!=='null' && user!=null){
        // console.log("Prolazim u IF confg")
        token = JSON.parse(user).token;
      }
      const conf={
        headers: new Headers({'X-Auth-Token': token},
                              {'Access-Control-Allow-Methods':'GET'}),
      };
      return conf;
    }
  }
  
  export default AuthenticationService