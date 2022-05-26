import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import UserPageLogin from "../user/Login";
import UserPageRegister from "../user/Register";


export default function HomePage(){
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