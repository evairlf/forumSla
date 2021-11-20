import { UserQuestions } from "types/user";

type Props = {
  user : UserQuestions[];
}

const Ask = ({ user } : Props) => {
    return  (
        <div className="row mb-1 perguntas ">
        <nav aria-label="Page navigation example ">
            <ul className="pagination d-flex justify-content-center xingorinfola">
              <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Proxima</a></li>
            </ul>
          </nav>
        
          <tbody>
                    {user?.map( x => (
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                          <h3 className="mb-0">{x.nome}</h3>
                          <p className="mb-1 text-muted">{x.questions?.map( y => (<h6>{y.question}</h6>))}</p>
                          <a href="" className="stretched-link">Responda!</a>
                        </div>
                      </div>
                    ))}
                </tbody>

          <div className="col-md-25">
            
            <div className="col-auto d-none d-lg-block">
            </div>
          </div>
          
        </div >
    );
}

export default Ask;