import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [altura, setAltura] = useState("");
  const [weigth, setWeigth] = useState("");
  
  // botão de limpar form
  const clearForm = (e) => {
    e.preventDefault();
    setAltura("");
    setWeigth("");
  };

  // função para permitir apenas numeros e virgulas
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
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, altura, weigth)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
