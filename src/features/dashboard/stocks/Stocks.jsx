import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { db } from "../../../app/config/firebase";
import { deleteStock } from "./stockActions";


export default function StockItem({stock}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user.user.uid);

    const deleteHandler =  (e) => {
        const doc2 = doc(db, "stocks", e+user)
        deleteDoc(doc2)
        dispatch(deleteStock(e))
    }

    return(
        <>
        <Table.Row>
            <Table.Cell>{stock.ticker}</Table.Cell>
            <Table.Cell>${Math.round(stock.close)}</Table.Cell>
            <Table.Cell>{stock.qty}</Table.Cell>
            <Table.Cell>${(Math.round(stock.close * stock.qty)).toLocaleString()} </Table.Cell>
            <Table.Cell>
                <Button value={stock.ticker} onClick={(e) => deleteHandler(e.target.value)}>Delete</Button>
            </Table.Cell>
        </Table.Row>
        </>
    )
}