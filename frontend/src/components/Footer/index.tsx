import './styles.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light px-3  flex-row ">App desenvolvido para tarefa por
                <a className="mx-2" href="https://github.com/evairlf" target="_blank" rel="noreferrer"> Evair Leite Feldmann</a>
                <a className="mx-2" href="https://github.com/JefFischer" target="_blank" rel="noreferrer"> Jeferson André Froelich Fischer</a>
                <a className="mx-2" href="https://github.com/williamxave" target="_blank" rel="noreferrer"> William Cristiano Bohn</a></p>
            </div>
        </footer>
    );
}

export default Footer;