import React, { useState } from "react"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { Button } from "semantic-ui-react"
// import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "./userActions.js"


export default function UserPageRegister() {

    const disptach = useDispatch()

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassowrd, setRegisterPassword] = useState("")

    //auth
    const register = async () => {
        try {
            const newEmail = registerEmail
            console.log(newEmail)
            const user = await createUserWithEmailAndPassword(auth, newEmail, registerPassowrd)
            disptach(updateUser(user))
            console.log(user)
            // history.push('/chat');
        } catch (error) {
            console.log(error.message)
        }

    }

    return(
        <div className="login-nav">
            <input type="text" placeholder="set email" onChange={(e) => setRegisterEmail(e.target.value)}/>
            <input type="text" placeholder="set password" onChange={(e) => setRegisterPassword(e.target.value)}/>
            <Button inverted name="register" content="register" onClick={register}/>
        </div>
    )

}