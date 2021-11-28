import { NavLink } from 'react-router-dom';
import { questions } from 'types/questions';
import './styles.css';

type Props = {
  questions: questions;
}

let redire = '';

const QuestionCard = ({ questions }: Props) => {

  const xtIdQuestion = 'externalQuestionid';

  const handleSaveId = (questionId: string) => {
    localStorage.setItem(xtIdQuestion, questionId)
  };

  const handleResponses = (questionId: string) => {
    localStorage.setItem(xtIdQuestion, questionId);
    window.location.href = "/responses";
  };
  //nameOwner
  //externalIdUser
  return (
    <div className="row g-0 border rounded overflow-hidden d-flex flex-md-row mb-4 shadow-sm h-md-250 position-relative perguntas">
      <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">{questions.nameOwner}</h3>
        <p className="mb-1 text-muted width:720px">{<h6>{questions.question}</h6>}</p>
        
          { (localStorage.getItem('externalIdUser') && localStorage.getItem('nameOwner') ? <div className="d-flex justfy-content-center my-10000"><NavLink className="btn btn-link" onClick={() => handleSaveId(questions.externalIdQuestion)} to="answers">Responda!</NavLink>
          <button className="btn btn-link" onClick={() => handleResponses(questions.externalIdQuestion)}>Respostas</button></div> : '')}
          

        
      </div>
    </div>
  );
}

export default QuestionCard;