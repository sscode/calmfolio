import { CURRENT_USER } from "./userConstants"

export function updateUser(user) {

    return {
        type: CURRENT_USER,
        payload: user
    }
}