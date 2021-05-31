import React from 'react'

function ErrorMessage(props){
    return(
        <div className='mt-5 ml-5'>
            <h2><b>{props.message}</b></h2>
        </div>
    )
}

export default ErrorMessage