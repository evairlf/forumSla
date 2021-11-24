import Footer from "components/Footer";
import Sidebar from "components/sidebar"
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "services/api";
import { makeQuestion } from "types/user";
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
        console.log(mkquest.question);
        console.log(external_id_mocked);

        api
            .post('/api/v1/question/register',  
            {
                externalIdOwner: external_id_mocked,
                question: "Antes eu odiava front end quando fiz esse trabalho eu odeio mais ainda tenho trauma?"
                
                
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
