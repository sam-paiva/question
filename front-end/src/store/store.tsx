import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import questionsReducer from './reducers/questionsReducer';
import answerReducer from './reducers/answerReducer';

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    question: questionsReducer,
    answers: answerReducer
});

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducers>

export default store;