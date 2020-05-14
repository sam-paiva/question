import { GET_ALL_QUESTIONS_SAGA } from "../../saga/sagaTypes";

export const getAllQuestions = () => {
    return ({ type: GET_ALL_QUESTIONS_SAGA });
}