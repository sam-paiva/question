import { GET_ALL_QUESTIONS_SAGA, CREATE_NEW_QUESTION_SAGA } from "../../saga/sagaTypes";

export const getAllQuestions = () => {
    return ({ type: GET_ALL_QUESTIONS_SAGA });
}

export const createNewQuestion = (parameters: any) => {
    return ({ type: CREATE_NEW_QUESTION_SAGA, payload: parameters });
}