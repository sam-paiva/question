import { User } from "./user";

export interface QuestionType {
    id: number,
    title: string,
    created_at: Date,
    user: User
}
