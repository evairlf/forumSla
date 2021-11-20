import { Questions } from "./questions"

export type User = {
    id : string;
    nome: string;
    email: string;
    password : string;
}

export type UserQuestions = {
    id : string;
    nome : string;
    questions: Questions[];
}

