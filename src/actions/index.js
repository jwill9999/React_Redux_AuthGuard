import { CHANGE_AUTH } from './type'

export function authenticate(loggedIn) {

    return {
        type: CHANGE_AUTH,
        payload: loggedIn
    }
}