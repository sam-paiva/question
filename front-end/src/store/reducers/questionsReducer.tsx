import * as types from "../../types/questions";

const initialState: types.QuestionsState = {
    questions: [],
    isLoading: false
}

const questionsReducer = (state = initialState, action: types.QuestionsActions): types.QuestionsState => {
    switch (action.type) {
        case types.GET_ALL_QUESTIONS:
            state.questions = action.payload;
            return Object.assign({}, state);
        case types.CREATE_QUESTION:
            return Object.assign({}, state);
        case types.IS_LOADING:
            state.isLoading = !state.isLoading;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default questionsReducer;