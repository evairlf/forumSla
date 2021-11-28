import { NavLink } from 'react-router-dom';
import { getAuthData } from 'services/util/requests';
import { questions, response } from 'types/questions';
import './styles.css';

type Props = {
  response: response;

}

const responseCard = ( { response } : Props) => {

    const xtIdQuestion = 'externalQuestionid';

    const handleSaveId = ( questionId: string) => {
        localStorage.setItem(xtIdQuestion, questionId)
    };

    return (
      <>
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative perguntas">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0" >{response.nameOwner}</h3>
          <textPath className="mb-1 text-muted row width:720px">{response.response}</textPath>
        </div>
      </div>
      </>
    );
}

export default responseCard;