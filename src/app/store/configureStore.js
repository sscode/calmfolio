import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from "./routeReducer";

export function configureStore(){
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}