import { User } from "./user";
import { QuestionType } from './questionType';

export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';

export interface Question {
    id: number,
    user_id: number,
    description: string,
    type_id: number,
    created_at: Date,
    updated_at: Date,
    user: User,
    type: QuestionType
}

export interface QuestionsState {
    questions: Question[]
}

export interface GetAllQuestionsAction {
    type: typeof GET_ALL_QUESTIONS,
    payload: Question[]
}

export type QuestionsActions = GetAllQuestionsAction;