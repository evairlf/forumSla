/* eslint-disable jsx-a11y/alt-text */
import logo from 'assets/images/Sei_la_Logotipo.png';
import './styles.css';

function Sidebar() {

    return (
        
        <div className="img-property flex-column">
          <img className="img-property" src={logo}></img>
          <div  className="d-flex px-5 justify-content-center flex-column">
          <h4>Usuário Logado</h4>
          <p>Usuário Deslogado</p>

          <button type="submit" className="btn #color ">Faça aqui a sua pergunta!</button>
          </div>
          
          
        </div>
        
    );
  }
  
  export default Sidebar;
  