import React from 'react'

function Status({status})
    {
        if(status){
            return <button>Logout</button>   
        }

        else{
            return <button>Login</button>
        }
    }                     
    export default Status