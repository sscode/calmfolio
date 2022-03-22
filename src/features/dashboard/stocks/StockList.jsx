import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Menu, Table, TableFooter} from "semantic-ui-react";
import { fetchData } from "../../../app/api/dataApi";
import StockItem from "./Stocks";
import { useDispatch, useSelector } from "react-redux";
import { updatePrices } from "./stockActions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../app/config/firebase";


export default function StockList(){

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user.user.uid);


    let stocks = useSelector(state => state.stocks.stocks)
    if(stocks.length === 0){
        const getStockDocs = async () => {
            const collectionRef = collection(db, "stocks")
            const data = await getDocs(collectionRef)
            const testList = (data.docs.map((doc) => ({...doc.data()})))
        
            let stockList = testList.filter(
                docs => docs.sender === user) 
            stocks = stockList
            priceHandler()
        }
        getStockDocs()
    }

    const priceHandler = () => {
        stocks.forEach(stock => {
            fetchData(stock)
            .then(stock2 => dispatch(updatePrices(stock2)))
        })
    }

    const sumStocks = () => {
        let sum = 0
        stocks.forEach(stock => {
            sum += stock.close * stock.qty
        })
        return sum
    }

    return(
        <div className="stockList">  
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ticker</Table.HeaderCell>
                        <Table.HeaderCell>Close</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {stocks.map(stock => (
                        <StockItem stock={stock} />
                    ))}
                <Table.Row className="table-footer">
                    <Table.Cell>Portfolio</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                        ${Math.round(sumStocks()).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}