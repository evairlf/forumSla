
export type User = {
    id: string;
    nome: string;
    email: string;
    password: string;
}

export type LoginRequest = {
    email: string;
    password: string;
}

export type isLogged = {
    name: string;
}

export type makeQuestion = {
    question: string,
    externalIdOwner: string
}