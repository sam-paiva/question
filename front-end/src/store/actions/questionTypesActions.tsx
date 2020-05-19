import { GET_ALL_QUESTION_TYPES_SAGA } from "../../saga/sagaTypes";

export const getAllQuestionTypes = () => {
    return ({ type: GET_ALL_QUESTION_TYPES_SAGA });
}