import * as types from "../../types/questionType";

const initialState: types.QuestionTypesState = {
    questionTypes: []
}

const questionTypesReducer = (state = initialState, action: types.QuestionTypesActions): types.QuestionTypesState => {
    switch (action.type) {
        case types.GET_ALL_QUESTION_TYPES:
            state.questionTypes = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default questionTypesReducer;