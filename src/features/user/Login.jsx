import React, { useState } from "react"
import {signInWithEmailAndPassword,
    onAuthStateChanged, signOut } from "firebase/auth"
import {auth} from "../../app/config/firebase.js"
import { Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "./userActions.js"
import { useSelector } from "react-redux"
import { clearStocks } from "../dashboard/stocks/stockActions.js"


export default function UserPageLogin() {

    const dispatch = useDispatch()
    const history = useHistory();

    const user = useSelector(state => state.user.user.user)
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

    // const logout = async () => {
    //     //signout
    //     await signOut(auth)
    //     disptach(updateUser(""))
    //     //clear stocks
    //     disptach(clearStocks())
    // }


    return(
        <>
            {/* {user ? 
                <>
                    <Button inverted className="logout" name="logout" onClick={logout}>logout</Button>
                </>
            : */}
            <div>
                <input type="text" placeholder="login email" onChange={(e) => setLoginEmail(e.target.value)}/>
                <input type="text" placeholder="login password" onChange={(e) => setLoginPassword(e.target.value)}/>
                <Button color='green' name="login" onClick={login}>Login</Button>
            </div>
            {/* } */}
        </>
    )

}