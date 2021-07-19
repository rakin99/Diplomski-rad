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
        return fetch(`${this.url}/login`,conf).then(res => {
                                                      if(res.status==401){
                                                        return res
                                                      }else if(res.status!=500){
                                                        return res.json()
                                                      }
                                                    });
    }

    logout(){
      localStorage.removeItem('loggedUser');
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

    edit(editData){
      var user = localStorage.getItem('loggedUser');
      var token = null;
      if(user!=='null' && user!=null){
        // console.log("Prolazim u IF confg")
        token = JSON.parse(user).token;
      }
      var conf={
          method: 'PUT',
          headers: { 'Content-Type': 'application/json','X-Auth-Token': token,'Access-Control-Allow-Methods':'PUT' },
          body: JSON.stringify(editData)
                            };
      return fetch(`${this.url}/edit`,conf).then(res => res.json());
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
        // console.log(JSON.stringify(user))
      }
      const conf={
        method: 'GET',
        headers: new Headers({'X-Auth-Token': token},
                              {'Access-Control-Allow-Methods':'GET'}
                              ),
      };
      return conf;
    }

    getAllUsers(numberPage) {
      return fetch(`${this.url}?page=${numberPage}&size=5`,this.getConf()).then(res => res.json());
    }

    getUserByEamil(numberPage,email) {
      return fetch(`${this.url}/get-user-by-email?page=${numberPage}&size=5&email=${email}`,this.getConf()).then(res => res.json());
    }

    deleteUser(id) {
      var user = localStorage.getItem('loggedUser');
      var token = null;
      if(user!=='null' && user!=null){
        token = JSON.parse(user).token;
      }
      const conf={
        method: 'DELETE',
        headers: new Headers({'X-Auth-Token': token},
                              {'Access-Control-Allow-Methods':'DELETE'}
                              ),
      };
      return fetch(`${this.url}/${id}`,conf);
    }

    getNumberPages(email) {
      return fetch(`${this.url}/get-number-pages?email=${email}`,this.getConf()).then(res => res.json());
    }
  }
  
  export default AuthenticationService