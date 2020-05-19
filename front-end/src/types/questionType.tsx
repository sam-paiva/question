import { User } from "./user";

export const GET_ALL_QUESTION_TYPES = 'GET_ALL_QUESTION_TYPES'

export interface QuestionTypesState {
    questionTypes: QuestionType[]
}

export interface QuestionType {
    id: number,
    title: string,
    created_at: Date,
    user: User
}

export interface GetAllQuestionTypes {
    type: typeof GET_ALL_QUESTION_TYPES,
    payload: QuestionType[]
}

export type QuestionTypesActions = GetAllQuestionTypes;
