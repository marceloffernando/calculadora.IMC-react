import "./ImcCalc.css";

const ImcCalc = () => {
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="weigth">Peso:</label>
            <input
              type="text"
              name="weigth"
              id="weigth"
              placeholder="exemplo 70,5"
            />
          </div>
        </div>
        <div className="action-control">
          <button>Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
