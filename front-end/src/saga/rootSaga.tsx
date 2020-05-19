import { all } from 'redux-saga/effects';
import { watchAllQuestions } from './questions/questionsSaga';
import { watchAllAnswers } from './answer/answerSaga';
import { watchAllUser } from './user/userSaga';
import { watchAllQuestionTypes } from './questionTypes/questionTypesSaga';

export default function* rootSaga() {
    yield all([
        watchAllQuestions(),
        watchAllAnswers(),
        watchAllUser(),
        watchAllQuestionTypes()
    ]);
}