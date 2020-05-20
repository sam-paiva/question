import { User } from "./user";
import { QuestionType } from './questionType';

export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const IS_LOADING = 'IS_LOADING';

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
    questions: Question[],
    isLoading: boolean
}

export interface GetAllQuestionsAction {
    type: typeof GET_ALL_QUESTIONS,
    payload: Question[]
}

export interface CreateNewQuestion {
    type: typeof CREATE_QUESTION,
    payload: void
}

export interface IsLoadingAction {
    type: typeof IS_LOADING,
    payload: void
}

export type QuestionsActions = GetAllQuestionsAction | CreateNewQuestion | IsLoadingAction;