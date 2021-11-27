import { NavLink } from 'react-router-dom';
import { questions } from 'types/questions';
import './styles.css';

type Props = {
    questions: questions;
}

const QuestionCard = ( { questions } : Props) => {

    const xtIdQuestion = 'externalQuestionid';

    const handleSaveId = ( questionId: string) => {
        localStorage.setItem(xtIdQuestion, questionId)
    };

    return (
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative perguntas">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{questions.nameOwner}</h3>
          <p className="mb-1 text-muted width:720px">{<h6>{questions.question}</h6>}</p>
          <div>
          <NavLink className="btn btn-link" onClick={() => handleSaveId(questions.externalIdQuestion)} to="answers">Responda!</NavLink>
          </div>

        </div>
      </div>
    );
}

export default QuestionCard;