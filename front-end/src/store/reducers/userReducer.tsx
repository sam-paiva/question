import * as types from "../../types/user";

const initialState: types.UserState = {
    token: ''
}

const userReducer = (state = initialState, action: types.UserActions): types.UserState => {
    switch (action.type) {
        case types.LOGIN:
            state.token = action.payload;
            return Object.assign({}, state);
        case types.LOGOUT:
            state.token = '';
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default userReducer;