import { combineReducers } from "redux";
import stockReducer from "../../features/dashboard/stocks/stockReducer";
import userReducer from "../../features/user/userReducer";

const rootReducer = combineReducers({
    stocks: stockReducer,
    user: userReducer
})

export default rootReducer;