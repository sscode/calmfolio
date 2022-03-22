import { CURRENT_USER } from "./userConstants";

const initialState = {
    user: "",
}

export default function userReducer(state = initialState, {type, payload}) {

    switch(type) {
        case CURRENT_USER:
            return {
                user: payload
            };
        default:
            return state;
    }
}