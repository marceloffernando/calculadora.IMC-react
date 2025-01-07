import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = () => {
  const [altura, setAltura] = useState("");
  const [weigth, setWeigth] = useState("");

  const clearForm = (e) => {
    e.prventDefault();
    setAltura("");
    setWeigth("");
  };

  // função para poder colocar só numeros sem letras
  const digitosValidos = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleAlturaChange = (e) => {
    const updateValue = digitosValidos(e.target.value);
    setAltura(updateValue);
  };

  const handleWeigthChange = (e) => {
    const updateValue = digitosValidos(e.target.value);
    setWeigth(updateValue);
  };

  return (
    <div id="calc-container">
      <h2>calculadora IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="exemplo 1,75"
              onChange={(e) => handleAlturaChange(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weigth">Peso:</label>
            <input
              type="text"
              name="weigth"
              id="weigth"
              placeholder="exemplo 70,5"
              onChange={(e) => handleWeigthChange(e)}
              value={weigth}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
