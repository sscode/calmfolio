import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { auth } from "../../app/config/firebase";
import { clearStocks } from "../dashboard/stocks/stockActions";
import { updateUser } from "./userActions";

export default function Logout(){
    
    const dispatch = useDispatch()
    
    const logout = async () => {
        //signout
        await signOut(auth)
        dispatch(updateUser(""))
        //clear stocks
        dispatch(clearStocks())
    }

    return(
        <div className="logoutFooter">
            <Button inverted className="logout" name="logout" onClick={logout}>logout</Button>
            <a className='contact' href="http://www.twitter.com/stusim" target="_blank">contact</a>
        </div>
    )
}