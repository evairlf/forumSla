import Footer from "components/Footer";
import Sidebar from "components/sidebar"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import api from "services/api";
import { getAuthData } from "services/util/requests";

import './styles.css';

const external_id_mocked = 'aa8d7baa-3c03-43f6-8d4b-b0869250fa8f';


type mkQuest = {
    question: string,
    externalIdOwner: string
}


const Questions = () => {
    const [nome, setnome] = useState();

    const { register, handleSubmit } = useForm<mkQuest>();



    const onSubmit = (mkquest: mkQuest) => {
        api
            .post('/api/v1/question/register',
                {
                    externalIdOwner: getAuthData().externalId,
                    question: mkquest.question


                },
                {
                    headers: {

                    }
                }
            )
            .then((response) => {
                console.log(mkquest.question);
                console.log(external_id_mocked);

            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };


    return (
        <>  <div>
            <div className="sidebar-teimoso">
                <Sidebar />
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="questions-conteiner d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="input-group-sm float-right">

                            <div className="couve">
                                <span className="input-group-text ">Digite sua pergunta aqui</span>
                                <textarea className="form-control input-group " maxLength={250}
                                    aria-label="With textarea" {...register('question')} name="question" ></textarea>
                                <div className="merda d-flex justify-content-center">
                                    <button className="btn" type="submit" >Enviar!</button>
                                    <NavLink className="btn " to=""  >Voltar!</NavLink>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
            <Footer />
        </>
    );
}

export default Questions;
