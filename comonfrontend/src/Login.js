import React from 'react'
import { Button } from "@material-ui/core"
import './Login.css'
import { auth, provider } from '../firebase'
//import { actionTypes } from './reducer'
//import { useStateValue } from './StateProvider'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))
    }

return(
    <div className="login">
        <div className="login__container">
            <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/6b/20200905003027%21WhatsApp.svg/119px-WhatsApp.svg.png" alt="ComOn" />
            <div className="login__text">
                <h1>Sign in to Common</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
    )
}
export default Login