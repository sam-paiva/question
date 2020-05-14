import * as types from "../../types/answers";

const initialState: types.AnswerState = {
    answers: []
}

const answerReducer = (state = initialState, action: types.AnswerActions): types.AnswerState => {
    switch (action.type) {
        case types.GET_ANSWERS_BY_QUESTION_ID:
            state.answers = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default answerReducer;