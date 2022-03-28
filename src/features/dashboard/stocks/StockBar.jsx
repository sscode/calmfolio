import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form} from "semantic-ui-react";
import { useSelector } from "react-redux";
import { fetchData } from "../../../app/api/dataApi";
import { updatePrices } from "./stockActions";
import { setDoc, doc } from "firebase/firestore"
import { db } from "../../../app/config/firebase";
import { toast } from "react-toastify";


export default function StockBar() {

    const [values, setValues] = useState("")
    const [numValues, setNumValues] = useState("")
    const user = useSelector(state => state.user.user.user.uid);
    const dispatch = useDispatch()

    function handleInputChange(e) {
        const {value} = e.target
        setValues(value)
    }

    function handleNumChange(e) {
        const numValue = e.target.value
        setNumValues(numValue)
    }

    
    function handleFormSubmit() {
        fetchData({ticker: values, qty: numValues})
        .then(stock2 => 
            dispatch(updatePrices(stock2))
        )
        addStockDB()
        setValues("")
        setNumValues("") 
    }
    //write to db
    const addStockDB = async () => {
        console.log(values, numValues, user, "called")
        await setDoc(doc(db, "stocks", values+user), {ticker: values, qty: numValues, sender: user})
    }   
    
    return(
        <div className="stockBar">
        <Form>
                <Form.Field>
                    <input type="text" placeholder="stock" name='stock' value={values} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="# of Shares" name='qty' value={numValues} onChange={(e) => handleNumChange(e)}/>
                </Form.Field>
                <Button 
                className='newStock'
                type='submit' inverted onClick={(e) => handleFormSubmit(values)}
                >
                add new stock
                {/* <Icon name='right paper plane outline' inverted></Icon> */}
                </Button>   
            </Form>
        </div>
    )
}