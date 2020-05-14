import * as types from "../../types/questions";

const initialState: types.QuestionsState = {
    questions: []
}

const questionsReducer = (state = initialState, action: types.QuestionsActions): types.QuestionsState => {
    switch (action.type) {
        case types.GET_ALL_QUESTIONS:
            state.questions = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default questionsReducer;