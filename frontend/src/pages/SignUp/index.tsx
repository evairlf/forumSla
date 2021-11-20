import logoImage from 'assets/images/Sei_la_Logotipo.png'
import './styles.css'

const SignUp = () => {
    return (
       <div className="d-flex justify-content-center mx-10 align-items-xl-center">
            <form>
                <img src={logoImage} ></img>
                <h3 className="d-flex justify-content-center">Cadastro de Usuário</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Digite seu Nome aqui..." />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu melhor Email aqui...." />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="email" className="form-control" placeholder="Digite sua senha aqui..." />
                </div>

                <div className="form-group">
                    <label>Confirmação de senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha novamente aqui..." />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-block ">Cadastrar!</button>
                </div>
                <p className="forgot-password text-right d-flex justify-content-start py-4 mx-2">
                    Já é Registrado? <a className="mx-2" href="/login"> Efetuar Login</a>
                </p>
            </form>
       </div>
    );
}

export default SignUp;