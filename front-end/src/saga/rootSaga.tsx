import { all } from 'redux-saga/effects';
import { watchAllQuestions } from './questions/questionsSaga';
import { watchAllAnswers } from './answer/answerSaga';
import { watchAllUser } from './user/userSaga';

export default function* rootSaga() {
    yield all([
        watchAllQuestions(),
        watchAllAnswers(),
        watchAllUser()
    ]);
}