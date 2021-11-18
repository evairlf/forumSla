import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/sidebar"

import './styles.css'

const Home = () => {
  return (
    <>


      <div className="d-flex">
        <div className="sidebar-teimoso">
          <Sidebar />
        </div>
        <div className="divzona">
          <div className="questions-div my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Perguntas Recentes</h6>
            <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">@Xaxa</strong>
                <a href="#">turabão!</a>
              </p>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>

              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">@Evair</strong>
                ippppppppppppppppppppppppppppppppp
              </p>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

              <p className="pb-3 mb-0 small lh-sm border-bottom">
                <strong className="d-block text-gray-dark">@Fischer</strong>
                eu 'nao sei o que estou fazendo '
              </p>
            </div>
            <small className="d-block text-end mt-3">
              <a href="#">Proxima Pagina </a>
            </small>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Home;