import { takeEvery, call, put, takeLatest, select } from 'redux-saga/effects';
import * as api from '../../services/services';
import * as actions from '../sagaTypes';
import { GET_ALL_QUESTIONS } from '../../types/questions';
import { GET_ALL_QUESTION_TYPES } from '../../types/questionType';

function* getAllQuestionTypes() {

    const response = yield call(api.getAllQuestionTypes);
    if (response.status === 200) {
        yield put({ type: GET_ALL_QUESTION_TYPES, payload: response.data });
    }
}

export function* watchAllQuestionTypes() {
    yield takeEvery(actions.GET_ALL_QUESTION_TYPES_SAGA, getAllQuestionTypes);
}