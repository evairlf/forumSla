import ResponsesCard from 'components/ResponsesCard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from 'services/api';
import { saveIdQuestion } from 'services/util/requests';
import { questions, response } from 'types/questions';
import { queBosta } from 'types/user';

import './styles.css';

type userQuestions = {
    first: boolean,
    last: boolean,
    content: response[];

};

type idQuestion = {
    couve: any;
};

const externalId = localStorage.getItem('externalQuestionid');


const ResponsesList = () => {

    const [responses, setuserQuestions] = useState<userQuestions>({
        first: true, last: false, content: [{
            nameOwner: '',
            response: ''
        }]
    });

    const [question, setQuestion] = useState<queBosta>();

    const { register, handleSubmit } = useForm();

    const page = 0;

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        api
            .get(`/api/v1/response/${externalId}?size=5&page=${activePage}`)
            .then((response) => {
                setuserQuestions(response.data);
                console.log(responses.last);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [activePage]);

    //procura a question so
    useEffect(() => {
        api
            .get(`/api/v1/question/find/${externalId}`)
            .then((response) => {
                setQuestion(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    const onSubmit = (obj: idQuestion) => {

        console.log(obj.couve);
        localStorage.removeItem('idQuestion');
        saveIdQuestion(obj.couve);
        console.log(obj.couve)

    };

    const onPageChange = (valor: number) => {
        setActivePage(valor);
    }

    return (

        <form className="perguntas" onSubmit={handleSubmit(onSubmit)}>


            <div className="row ">
                <nav>
                    <ul className="pagination d-flex justify-content-center">
                        <li className={`page-item ${responses.first ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(activePage - 1)}>Anterior</button>
                        </li>
                        <li className="page-item disabled">
                            <span className="page-link">{activePage + 1}</span>
                        </li>
                        <li className={`page-item ${responses.last ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(activePage + 1)}>Próxima</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative respostas">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{question?.nameOwner}</h3>
                    <p className="mb-1 width:720px"><p>{question?.question}</p></p>
                </div>
            </div>

            <tbody>
                {responses.content?.map(x => (
                    <ResponsesCard response={x} />
                ))}
            </tbody>


            <div className="col-md-25">

                <div className="col-auto d-none d-lg-block">
                </div>
            </div>
        </form>
    );
}

export default ResponsesList;
