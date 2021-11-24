export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'teste@email.com';
const CLIENT_PASSWORD = process.env.REACT_APP_CLIENT_PASSWORD ?? 'vrau';

const basicHeader = () => 'Basic' + window.btoa(CLIENT_ID + ':' + CLIENT_PASSWORD);

type LoginData = {
    email: string,
    password: string
}

type loginResponse = {
    nameOwner: string,
    externalId: string
}

const nome = 'nameOwner';
const id_externo = 'externalIdUser'

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/json'
    }

    const data = {
        username: 'teste@email.com',
        password: 'vrau'
    }



}

export const saveAuthData = (obj: loginResponse) => {
    localStorage.setItem(nome, obj.nameOwner);
    localStorage.setItem(id_externo, obj.externalId);
}

export const getAuthData = () => {
    const userCredentials = {
        name: localStorage.getItem(nome) ?? "",
        externalId: localStorage.getItem(id_externo) ?? ""
    }
    return userCredentials;
}