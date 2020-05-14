import { User } from "./user";

export const GET_ANSWERS_BY_QUESTION_ID = 'GET_ANSWERS_BY_QUESTION_ID'

export interface AnswerState {
    answers: Answer[]
}

export interface Answer {
    id: number,
    answer: string,
    created_at: Date,
    user: User
}


export interface GetAnswersByIdAction {
    type: typeof GET_ANSWERS_BY_QUESTION_ID,
    payload: Answer[]
}

export type AnswerActions = GetAnswersByIdAction;