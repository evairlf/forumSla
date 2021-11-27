import Ask from "components/Asks";
import Footer from "components/Footer";
import Sidebar from "components/sidebar"



import './styles.css'




const Home = () => {




  //const User = [{
  // id: "1",
  //nome: "Maria Rita",
  // questions: [
  // { question: "Pensar em poneys na hora do jantar significa que sou poneyfóbico?" },
  //{ question: "bathureinifeinn bathureinifeinn ein ein" },
  // { question: "se meu amigo ouve funk e canta ele eu devo botar fogo nele? (no amigo nao no funk)" },
  //{ question: "Hoje acordei com o olho vermelho, parece que eu fumo maconha por um olho e pelo outro cheiro cocaína, devo me preocupar?" }]
  // }, {
  // id: "2",
  //nome: "marionelson",
  //questions: [
  // { question: "Ser ou nao ser eis o cascao?" },
  // { question: "k'mon barby letis go bary?" },
  // { question: "a filo diz que tem 3 sapatos de rapé?" },
  // { question: "Fuscas podem voar?" }]
  //}];




  return (
    <>
      <div className="d-flex column ">
        <div>
          <Sidebar />
        </div>
        <Ask />
      </div >
      <Footer />
    </>
  );
}

export default Home;