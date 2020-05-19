export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER_DATA = 'GET_USER_DATA';

export interface UserState {
    token: string,
    user: User
}

export interface LoginViewModel {
    email: string,
    password: string
}

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    created_at: Date | null,
    updated_at: Date | null
}

export interface LoginAction {
    type: typeof LOGIN,
    payload: string
}

export interface LogoutAction {
    type: typeof LOGOUT,
    payload: void
}

export interface GetUSerData {
    type: typeof GET_USER_DATA,
    payload: User
}

export type UserActions = LoginAction | LogoutAction | GetUSerData;