export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface UserState {
    token: string
}

export interface LoginViewModel {
    email: string,
    password: string
}

export interface User {
    id: number,
    username: string,
    email: string,
}

export interface LoginAction {
    type: typeof LOGIN,
    payload: string
}

export interface LogoutAction {
    type: typeof LOGOUT,
    payload: void
}

export type UserActions = LoginAction | LogoutAction;