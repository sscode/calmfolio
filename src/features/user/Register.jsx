import React, { useState } from "react"
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, signOut } from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "./userActions.js"
import { useLocation } from "react-router-dom"


export default function UserPageRegister() {

    const disptach = useDispatch()
    const history = useHistory();

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassowrd, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

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
        <>
            <input type="text" placeholder="set email" onChange={(e) => setRegisterEmail(e.target.value)}/>
            <input type="text" placeholder="set password" onChange={(e) => setRegisterPassword(e.target.value)}/>
            <Button name="register" color="green" content="register" onClick={register}/>
        </>
    )

}