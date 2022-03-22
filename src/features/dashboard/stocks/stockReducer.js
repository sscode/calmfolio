import { CLEAR_STOCK, DELETE_STOCK, UPDATE_PRICES } from "./stockConstants";

const initialState = {
    stocks: [],
}

export default function stockReducer(state = initialState, {type, payload}) {
    switch(type){
        case UPDATE_PRICES:
            console.log(payload, "inside reducer")
            return {
                ...state,
                stocks: [...state.stocks, payload]
            };
        case DELETE_STOCK:
            //filter out stock payload
            const wRemoved = state.stocks.filter(stock => stock.ticker !== payload)
            return{
                stocks: [...wRemoved]
            }
        case CLEAR_STOCK:
            //filter out stock payload
            return{
                stocks: []
            }
        default:
            return state;
    }
}