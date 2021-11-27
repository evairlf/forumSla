/* eslint-disable jsx-a11y/alt-text */
import logo from 'assets/images/Logotipo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from "types/user";
import './styles.css';

type props = {
  userInfos: User;
  isLogged: boolean;
}


type click = {
  click: boolean
}


function Sidebar() {

  const [click, setclick] = useState<click>();

  let isLogged = false;

  if(localStorage.getItem('nameOwner') && localStorage.getItem('externalIdUser')){
    isLogged = true;
  }

  const logout = () => {
    localStorage.clear();
    window.location.reload();
};


  return (

    <div className=" img-property flex-column">
      <img className="img-property" src={logo}></img>
      <div className="d-flex px-5 justify-content-center flex-column">
        {isLogged ? (<>
        <h4 className="d-flex justify-content-center">Olá,<strong>{localStorage.getItem('nameOwner')}</strong></h4>
        <NavLink type="submit" className="btn btn-block " role='button'to="questions">Faça aqui sua pergunta!</NavLink>
        <p> </p>
        <NavLink type="submit" className="btn btn-block py-10" role='button' to="/"  onClick={logout}>Logout</NavLink></>) :
         (<><NavLink type="submit" className="btn btn-block pd-10" role='button' to="/login">Sign In</NavLink><p className="text-danger">
           <strong>Para fazer perguntas você precisa estar logado</strong></p></>)}
      </div>
    </div>



  );
}

export default Sidebar;