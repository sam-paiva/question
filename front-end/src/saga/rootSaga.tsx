import { all } from 'redux-saga/effects';
import { watchAllQuestions } from './questions/questionsSaga';
import { watchAllQuestionTypes } from './answer/answerSaga';

export default function* rootSaga() {
    yield all([
        watchAllQuestions(),
        watchAllQuestionTypes()
    ]);
}