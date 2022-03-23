import React, { useState } from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { Button } from "semantic-ui-react"
import { useDispatch } from "react-redux"
import { updateUser } from "./userActions.js"
// import { useSelector } from "react-redux"


export default function UserPageLogin() {

    const dispatch = useDispatch()

    // const user = useSelector(state => state.user.user.user)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    //auth
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            dispatch(updateUser(user))
            // history.push('/chat');
        } catch (error) {
            console.log(error.message)
        }
    }


    return(
        
            <div className="login-nav">
                <input type="text" placeholder="login email" onChange={(e) => setLoginEmail(e.target.value)}/>
                <input type="text" placeholder="login password" onChange={(e) => setLoginPassword(e.target.value)}/>
                <Button className="ui button on" name="login" onClick={login}>login</Button>
            </div>
        
    )

}