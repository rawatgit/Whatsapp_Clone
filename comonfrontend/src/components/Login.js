import React from 'react'
import { Button } from "@material-ui/core"
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
//import { actionTypes } from './reducer'
//import { useStateValue } from './StateProvider'

const Login = () => {
    const[{}, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user
                    })
            })
            .catch(error => alert(error.message))
    }

return(
    <div className="login">
        <div className="login__container">
            <img src="icon.png" alt="ComOn" /> 
            <div className="login__text">
                <h1>Sign in to Common</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
    )
}
export default Login