import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Menu } from "semantic-ui-react";
import { auth } from "../../app/config/firebase";
import { clearStocks } from "../dashboard/stocks/stockActions";
import UserPageLogin from "../user/Login";
import UserPageRegister from "../user/Register";
import { updateUser } from "../user/userActions";

export default function NavBar() {

    const dispatch = useDispatch()
    const [active, setActive] = useState(true)
    const user = useSelector(state => state.user.user.user)

    function activeHandler(){
        setActive(!active)
    }

    const logout = async () => {
        //signout
        await signOut(auth)
        dispatch(updateUser(""))
        //clear stocks
        dispatch(clearStocks())
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item to='/' header>
                calmfolio
                </Menu.Item>
                {user ? 
                    //if logged in
                    <Menu.Item position='right'>
                        <Button inverted className="logout" name="logout" onClick={logout}>logout</Button>
                    </Menu.Item>
                
                :
                <>
                <Menu.Item>
                    {active ? 
                    <>
                    <UserPageLogin />
                    <Button className="ui button" onClick={() => activeHandler()}>register</Button>
                    
                    </>
                    : 
                    <>
                    <UserPageRegister />
                    <Button className="ui button" onClick={() => activeHandler()}>login</Button>
                    
                    </>
                    }
                </Menu.Item>
                        {active ?
                            <>
                            </> 
                            :
                            <>
                            </> 
                        }
                    
                </> 
                }
            </Container>
        </Menu>
    )
}