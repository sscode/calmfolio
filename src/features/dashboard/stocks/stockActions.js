import { CLEAR_STOCK, DELETE_STOCK, UPDATE_PRICES } from "./stockConstants";

export function updatePrices(stockDict){

    console.log(stockDict, "in action")

    return {
        type: UPDATE_PRICES,
        payload: stockDict
    }
}

export function deleteStock(stock){

    return {
        type: DELETE_STOCK,
        payload: stock
    }
}

export function clearStocks(){
    return {
        type: CLEAR_STOCK,
        payload: []
    }
}