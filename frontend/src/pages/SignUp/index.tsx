import logoImage from 'assets/images/Logotipo.png';
import { watch } from 'fs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from 'services/api';
import React, { useRef } from "react";
import { getAuthData, saveAuthData } from 'services/util/requests';
import './styles.css';

type FormLogin = {
    name: string,
    email: string;
    password: string;
    confirmPassword: string;
}

type FormLogadao = {
    nameOwner: string,
    externalId: string
}

const SignUp = () => {


    const [hasError, sethasError] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormLogin>();


    let passwordCurrent = watch("password", "");

    const [user, setUser] = useState({
        name: '',
        externalId: ''
    });


    const onSubmit = (formLogin: FormLogin) => {
        console.log(formLogin)
        api
            .post('/api/v1/owner/register', {
                name: formLogin.name,
                email: formLogin.email,
                password: formLogin.password
            })
            .then((response) => {
                localStorage.clear();
                const valor = getAuthData();
                setUser(getAuthData());
                setUser(response.data);
                sethasError(false);
                alert("cadastrado com sucesso");
                window.location.href = '/';
            })
            .catch((err) => {
                sethasError(true);
                alert("ops! ocorreu um erro" + err);
            });
    };

    return (
        <div className="d-flex justify-content-center mx-10 align-items-xl-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src={logoImage} ></img>
                <h3 className="d-flex justify-content-center">Cadastro de Usuário</h3>

                {hasError &&
                    (<div className="alert alert-danger">
                        Email ou senha inválidos!
                    </div>)}

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Digite seu nome aqui ...."
                        {...register('name', {
                            required: 'Campo Obrigatório',

                        })}
                        name="name" />
                    <div className="invalid-feedback d-block">{errors.name?.message}</div>
                </div>

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
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        placeholder="Digite sua senha aqui..."
                        {...register('password', {
                            required: 'Campo Obrigatório',
                            minLength: {
                                value: 6,
                                message: "A senha deve conter no minimo 6 caracteres"
                            }
                        })}
                        name="password" />
                    <div className="invalid-feedback d-block">{errors.password?.message}</div>
                </div>

                <div className="form-group">
                    <label>Confirmação de senha</label>
                    <input type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        placeholder="Digite sua senha aqui..."
                        {...register('confirmPassword', {
                            validate: value =>
                                value === passwordCurrent || "As senhas não sao identicas",
                            required: 'Campo Obrigatório'
                        })}
                        name="confirmPassword" />
                    <div className="invalid-feedback d-block">{errors.confirmPassword?.message}</div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-block ">Cadastrar!</button>
                </div>
                <p className="forgot-password text-right d-flex justify-content-start py-4 mx-2">
                    Já é Registrado? <a className="mx-2" href="/login">Efetuar Login</a>
                </p>
            </form>
        </div>
    );
}

export default SignUp;