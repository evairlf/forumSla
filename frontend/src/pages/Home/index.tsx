import Footer from "components/Footer";
import Sidebar from "components/sidebar"

import './styles.css'

const Home = () => {
  return (
    <>


      <div className="d-flex">
        <div className="sidebar-fica-certo">
          <Sidebar />
        </div>


        <div className="row mb-1">
          <div className="col-md-25">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">EU</h3>
                <p className="mb-1 text-muted">hoje queria comer uns cu porra  </p>
                <a href="#" className="stretched-link">Responda!</a>
              </div>
            </div>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">EU</h3>
                <p className="mb-1 text-muted">quero arrumar essa bosta pq aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                <a href="#" className="stretched-link">Responda!</a>
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Proxima</a></li>
            </ul>
          </nav>
        </div >


      </div >
      <Footer />
    </>
  );
}

export default Home;