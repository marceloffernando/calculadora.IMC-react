import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
import "./App.css";

function App() {
  const calcImc = (e, altura, weigth) => {
    e.preventDefault();

    if (!weigth || !altura) return;

    // convenção de texto para numero
    const weigthFloat = +weigth.replace(",", ".");
    const alturaFloat = +altura.replace(",", ".");

    const imcResult = (weigthFloat / (alturaFloat * alturaFloat)).toFixed(1);
    setImc(imcResult);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container">
        {/* se não tiver imc mostra(imcCalc) se tiver mostra (imcTable) */}
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} />}
      </div>
    </>
  );
}

export default App;
