import logoImage from 'assets/images/Logotipo.png'
import { Console } from 'console';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, Route } from 'react-router';
import api from 'services/api';
import { getAuthData, saveAuthData } from 'services/util/requests';
import './styles.css'

type FormLogin = {
    email: string;
    password: string;
}

const Login = () => {
    const [hasError, sethasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormLogin>();

    const [user, setUser] = useState({
        name: '',
        externalId: ''
    });

    const onSubmit = (formLogin: FormLogin) => {
        api
            .post('/api/v1/owner/login', {
                email: formLogin.email,
                password: formLogin.password
            })
            .then((response) => {
                localStorage.clear();
                saveAuthData(response.data);
                const valor = getAuthData();
                console.log('VALOR DO LOCAL STORAGE: ' + valor.name + '  --  ' + valor.externalId);
                setUser(getAuthData());
                setUser(response.data);
                sethasError(false);
            })
            .catch((err) => {
                sethasError(true);
                console.error("ops! ocorreu um erro" + err);
            });
    };

    const imprime = () => {
        console.log(user.name);
        console.log(user.externalId);
    }

    return (
        <div className="d-flex justify-content-center mx-2 align-items-xl-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src={logoImage} ></img>
                <h3 className="d-flex justify-content-center">Login</h3>

                {hasError &&
                    (<div className="alert alert-danger">
                        Email ou senha inválidos!
                    </div>)}

                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Digite seu Email aqui...."
                        {...register('email', {
                            required: 'Campo Obrigatório',
                            pattern: {
                                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                                message: 'Email Inválido'
                            }
                        })}
                        name="email" />
                    <div className="invalid-feedback d-block">{errors.email?.message}</div>
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Digite sua senha aqui..."
                        {...register('password', {
                            required: "Campo Obrigatório"
                        })}
                        name="password"
                    />
                    <div className="invalid-feedback  d-block">{errors.password?.message}</div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-block " role='button'>Entrar!</button>
                    { localStorage.getItem('externalIdUser') ? <Redirect push to="/"/> : ''}
                </div>
                <p className="forgot-password text-right d-flex justify-content-start py-4 mx-2 ">
                    Não tem conta? <a className="mx-2 cadastro" onClick={() => window.location.href = "signup"}> Cadastrar Conta</a>
                </p>
            </form>
        </div>
    );
}

export default Login;