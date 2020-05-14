import { takeEvery, call, put, takeLatest, select } from 'redux-saga/effects';
import * as api from '../../services/services';
import * as actions from '../sagaTypes';
import { GET_ANSWERS_BY_QUESTION_ID } from '../../types/answers';

function* getAnswersByQuestionId(action: any) {
    const response = yield call(api.getAnswersByQuestionId, action.payload);
    if (response.status === 200) {
        yield put({ type: GET_ANSWERS_BY_QUESTION_ID, payload: response.data });
    }
}

export function* watchAllQuestionTypes() {
    yield takeEvery(actions.GET_ANSWERS_BY_QUESTION_ID_SAGA, getAnswersByQuestionId);
}