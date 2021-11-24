/* eslint-disable jsx-a11y/alt-text */
import logo from 'assets/images/Logotipo.png';
import { User } from "types/user";
import './styles.css';

type props = {
    userInfos : User;
    isLogged : boolean;
}



function Sidebar() {

  return (

    <div className=" img-property flex-column">
      <img className="img-property" src={logo}></img>
      <div className="d-flex px-5 justify-content-center flex-column">
        

        <a href="/login"><button className="btn">Faça aqui a sua pergunta!</button></a>
      </div>


    </div>

  );
}

export default Sidebar;
