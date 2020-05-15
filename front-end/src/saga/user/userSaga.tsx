import { takeEvery, call, put, takeLatest, select } from 'redux-saga/effects';
import * as api from '../../services/services';
import * as actions from '../sagaTypes';
import { LOGIN, LOGOUT } from '../../types/user';

function* login(action: any) {

    try {
        const response = yield call(api.login, action.payload);

        if (response.status === 200) {
            console.log(response.status);
            yield put({ type: LOGIN, payload: response.data.token });
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function* logout(action: any) {

    try {
        yield put({ type: LOGOUT });
    }
    catch (ex) {
        console.log(ex);
    }
}

export function* watchAllUser() {
    yield takeEvery(actions.LOGIN_SAGA, login);
    yield takeEvery(actions.LOGOUT_SAGA, logout);
}