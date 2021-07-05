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

    register(registerData){
        console.log(registerData);
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

    getRolesFromStorage() {
        var user = localStorage.getItem('loggedUser');
        // console.log(user)
        return user;
    }
  }
  
  export default AuthenticationService