import Footer from "components/Footer";
import Sidebar from "components/sidebar"
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "services/api";
import { makeQuestion } from "types/user";
import './styles.css';

const external_id_mocked = '3ac2902c-49b3-4b9d-adb6-1a2872a420a8';

type mkQuest = {
    question: string,
    externalIdOwner: string
}


const Questions = () => {
    const [nome, setnome] = useState();

    const { register, handleSubmit } = useForm<mkQuest>();



    const onSubmit = (mkquest: mkQuest) => {
        console.log(mkquest.question)
        api
            .post('/question/register', {
                question: 'mkquest.question',
                externalIdOwner: external_id_mocked
            })
            .then((response) => {
                console.log(mkquest.question)
                
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
                                <textarea className="form-control input-group " maxLength={1250} aria-label="With textarea" {...register('question')} name="question" ></textarea>
                                <div className="merda justify-content-center"><button className="btn" type="submit" >Enviar!</button></div>

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

function cors(): any {
    throw new Error("Function not implemented.");
}
