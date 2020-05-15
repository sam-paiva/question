import { LoginViewModel } from "../../types/user";
import { LOGIN_SAGA, LOGOUT_SAGA } from "../../saga/sagaTypes";

export const loginAction = (login: LoginViewModel) => {
    return ({ type: LOGIN_SAGA, payload: login })
}

export const logoutAction = () => {
    return ({ type: LOGOUT_SAGA });
}