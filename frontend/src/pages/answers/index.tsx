import Footer from "components/Footer";
import Sidebar from "components/sidebar"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import api from "services/api";
import { getAuthData } from "services/util/requests";
import './styles.css';

type responseQuest = {
    externalIdQuestion: string,
    nameOwner: string
    response: string
}


const Answers = () => {
    const [nome, setnome] = useState();

    const { register, handleSubmit } = useForm<responseQuest>();



    const onSubmit = (mkquest: responseQuest) => {
        api
            .post('/api/v1/response/register',
                {
                    externalIdQuestion: localStorage.getItem('externalQuestionid'),
                    response: mkquest.response,
                    nameOwner: localStorage.getItem('nameOwner')
                },
                {
                    headers: {

                    }
                }
            )
            .then((response) => {
                console.log(mkquest.nameOwner);
                console.log(mkquest.externalIdQuestion);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="sidebar-teimoso">
                        <Sidebar />
                    </div>
                    <div className="questions-conteiner d-flex flex-column justify-content-center">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="input-group-sm float-right">

                                <div className="couve">
                                    <span className="input-group-text ">Responda a pergunta aqui</span>
                                    <textarea className="form-control input-group  " maxLength={1250} aria-label="With textarea" {...register('response')} name="response" ></textarea>
                                    <div className="merda d-flex justify-content-center">
                                        <NavLink className="btn" type="submit" to="/" >Enviar!</NavLink>
                                        <NavLink className="btn " to=""  >Voltar!</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div></div>
            </form>
            <Footer />
        </>
    );
}

export default Answers;