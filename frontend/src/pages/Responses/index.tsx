import Footer from "components/Footer";
import ResponsesList from "components/responsesComp";
import Sidebar from "components/sidebar"


const Responses = () => {

  return (
    <>
      <div className="d-flex column ">
        <div>
          <Sidebar />
        </div>
        <ResponsesList />
      </div >
      <Footer />
    </>
  );
}

export default Responses;