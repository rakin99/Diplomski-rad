import React from 'react'

function ErrorMessage(props){
    const cl=props.h==2 ? 'mt-5 ml-5':'mt-1 ml-1';
    return(
        <div className={cl}>
            {getMessage(props.h,props.message)}
        </div>
    )
}

function getMessage(h,m){
    var message = "";
    switch(h){
        case 1:
            message = <h1><b>{m}</b></h1>;
            break;
        case 2:
            message = <h2><b>{m}</b></h2>;
            break;
        case 3:
            message = <h3><b>{m}</b></h3>;
            break;
        case 4:
            message = <h4><b>{m}</b></h4>;
            break;
        case 5:
            message = <h5><b>{m}</b></h5>;
            break;
        case 6:
            message = <h6><b>{m}</b></h6>;
            break;
    }
    return message;
}

export default ErrorMessage