import { takeEvery, call, put, takeLatest, select } from 'redux-saga/effects';
import * as api from '../../services/services';
import * as actions from '../sagaTypes';
import { GET_ALL_QUESTIONS, CREATE_QUESTION, IS_LOADING } from '../../types/questions';

function* getAllQuestions() {
    yield put({ type: IS_LOADING });
    const response = yield call(api.getAllQuestions);

    if (response.status === 200) {
        yield put({ type: GET_ALL_QUESTIONS, payload: response.data });
        yield put({ type: IS_LOADING });
    }
}

function* createNewQuestion(action: any) {

    const response = yield call(api.createQuestion, action.payload);
    if (response.status === 200) {
        yield put({ type: CREATE_QUESTION });

        const questions = yield call(api.getAllQuestions);

        if (questions.status === 200)
            yield put({ type: GET_ALL_QUESTIONS, payload: questions.data });
    }
}

export function* watchAllQuestions() {
    yield takeEvery(actions.GET_ALL_QUESTIONS_SAGA, getAllQuestions);
    yield takeEvery(actions.CREATE_NEW_QUESTION_SAGA, createNewQuestion);
}