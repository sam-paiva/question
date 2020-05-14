import { takeEvery, call, put, takeLatest, select } from 'redux-saga/effects';
import * as api from '../../services/services';
import * as actions from '../sagaTypes';
import { GET_ALL_QUESTIONS } from '../../types/questions';

function* getAllQuestions() {

    const response = yield call(api.getAllQuestions);

    if (response.status === 200) {
        yield put({ type: GET_ALL_QUESTIONS, payload: response.data });
    }
}

export function* watchAllQuestions() {
    yield takeEvery(actions.GET_ALL_QUESTIONS_SAGA, getAllQuestions);
}