import { GET_ANSWERS_BY_QUESTION_ID_SAGA } from "../../saga/sagaTypes";

export const getAnswersByQuestionId = (id: number) => {
    return ({ type: GET_ANSWERS_BY_QUESTION_ID_SAGA, payload: id });
}