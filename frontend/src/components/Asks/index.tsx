import QuestionCard from 'components/questionsCard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from 'services/api';
import { saveIdQuestion } from 'services/util/requests';
import { questions } from 'types/questions';

import './styles.css';

type userQuestions = {
  first: boolean,
  last: boolean,
  content: questions[];

}

type idQuestion = {
  couve : any;
};



const Ask = () => {

  const [userQuestions, setuserQuestions] = useState<userQuestions>({ first: true,last: false,content: [] });

  const { register, handleSubmit } = useForm();

  const page = 0;

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    api
      .get(`/api/v1/question?page=${activePage}&sort=date,desc`)
      .then((response) => {
        setuserQuestions(response.data);
        console.log(userQuestions.last);
        localStorage.removeItem('externalQuestionid');
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [activePage]);

  const onSubmit = (obj : idQuestion) => {
    saveIdQuestion(obj.couve);
  };
  
  const onPageChange = (valor : number) =>{
    setActivePage(valor);
  }

  return (
    
    <form className="perguntas" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="row ">
            <nav>
                <ul className="pagination d-flex justify-content-center">
                    <li className={`page-item ${userQuestions.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(activePage-1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{activePage + 1}</span>
                    </li>
                    <li className={`page-item ${userQuestions.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(activePage+1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>

        <tbody>
          {userQuestions.content?.map(x => (
            <QuestionCard questions={x} />
          ))}
        </tbody>

        <div className="col-md-25">

          <div className="col-auto d-none d-lg-block">
          </div>
        </div>  
    </form>
  );
}

export default Ask;
