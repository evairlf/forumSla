import logoImage from 'assets/images/Sei_la_Logotipo.png'
import './styles.css'

const Login = () => {
    return (
       <div className="d-flex justify-content-center mx-2 align-items-xl-center">
            <form>
                <img src={logoImage} ></img>
                <h3 className="d-flex justify-content-center">Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu Email aqui...." />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="email" className="form-control" placeholder="Digite sua senha aqui..." />
                </div>

               
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-block ">Entrar!</button>
                </div>
                <p className="forgot-password text-right d-flex justify-content-start py-4 mx-2">
                    Não tem conta? <a className="mx-2" href="/signin"> Cadastrar Conta</a>
                </p>
            </form>
       </div>
    );
}

export default Login;