import React, { useState } from "react"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { Button } from "semantic-ui-react"
// import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "./userActions.js"
import { toast } from "react-toastify"


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
            setRegisterEmail("")
            setRegisterPassword("")
            console.log(user)
            // history.push('/chat');
        } catch (error) {
            setRegisterEmail("")
            setRegisterPassword("")
            console.log(error.message)
            toast.error("Invalid username/password")
        }

    }

    return(
        <div className="login-nav">
            <input type="text" value={registerEmail} placeholder="set email" onChange={(e) => setRegisterEmail(e.target.value)}/>
            <input type="password" value={registerPassowrd} placeholder="set password" onChange={(e) => setRegisterPassword(e.target.value)}/>
            <Button className="ui button on" name="register" content="register" onClick={register}/>
        </div>
    )

}