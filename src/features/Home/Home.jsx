import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { auth } from "../../app/config/firebase";
import { clearStocks } from "../dashboard/stocks/stockActions";
import UserPageLogin from "../user/Login";
import UserPageRegister from "../user/Register";
import { updateUser } from "../user/userActions";


export default function HomePage(){
    const dispatch = useDispatch()
    const [active, setActive] = useState(true)
    const user = useSelector(state => state.user.user.user)

    function activeHandler(){
        setActive(!active)
    }
    
    return(
        <div className="homePage">
            <div>
                <h1>calmfolio</h1>
                <p>view your stocks without the stress</p>
                <li>yesterday's close price only</li>
                <li>no reds and greens</li>
            </div>
            <br></br>
            <div>
            {user ? 
                //if logged in
                <></>
                :
                <>
                    {active ? 
                    <div className="logReg">
                        <UserPageLogin />
                        <Button inverted onClick={() => activeHandler()}>register</Button>
                    </div>
                    : 
                    <div className="logReg">
                    <UserPageRegister />
                    <Button inverted onClick={() => activeHandler()}>login</Button>
                    </div>
                    }
                </> 
                }
            </div>
        </div>
    )
}