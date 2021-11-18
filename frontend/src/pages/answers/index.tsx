import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/sidebar"
import './styles.css';

const Answers = () => {
    return (
        <>
            <div>
                <div className="sidebar-teimoso">
                    <Sidebar />
                </div>
                <div className="questions-conteiner d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="input-group-sm float-right">

                            <div className="couve">
                                <span className="input-group-text ">Responda a pergunta aqui</span>
                                <textarea className="form-control input-group  " maxLength={1250} aria-label="With textarea"></textarea>
                                <div className="merda justify-content-center"><button className="btn" >Enviar!</button></div>

                            </div>

                        </div>
                    </div>
                </div></div>
            <Footer />
        </>
    );
}

export default Answers;