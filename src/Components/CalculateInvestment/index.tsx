import { useState } from "react";

const InvestmentCalculator = () => {
  const [totalValue, setTotalValue] = useState("");
  const [months, setMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [result, setResult] = useState("");
  const [resultAlt, setResultAlt] = useState("");

  const calculateInvestment = () => {
    const principal = parseFloat(totalValue);
    const n = parseFloat(months);
    const r = parseFloat(interestRate) / 100;

    const amount = principal * Math.pow(1 + r, n);
    setResult((amount - principal).toFixed(2));
    calculateInvestAlt();
  };

  const calculateInvestAlt = () => {
    const principal = parseFloat(totalValue)
    const n = parseFloat(months);
    const r = parseFloat(interestRate) / 100;

    let amount = principal;
    for (let i = 0; i < n; i++) {
      amount -= amount * r
    }

    setResultAlt((principal - amount).toFixed(2))
  }

  const clearValues = () => {
    setTotalValue("");
    setMonths("");
    setInterestRate("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="flex card radius">
        <h2 style={{marginBottom: '0px'}}>Calculadora de investimentos (Vale a pena pagar a vista ?)</h2>
        <p style={{marginTop: '0px'}}>Uso inteligente do cartão de credito</p>
        <div className="form-container">
          <label>Valor da compra:</label>
          <input
            type="number"
            value={totalValue}
            onChange={(e) => setTotalValue(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label>Quantidade de meses:</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label>
            Porcentagem de possivel rendimento mensal (CDI, LCA, LCI, FIIS...):
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="flex row gap-10">
          <button onClick={calculateInvestment}>Calcular</button>

          {result && <button onClick={clearValues}>Limpar</button>}
        </div>
        {result && (
          <p>
            Após {months} meses, o seu investimento irá gerar aproximadamente um
            retorno de: <strong>R$ {result}</strong>
          </p>
        )}

        {resultAlt && (
          <p>
            Após {months} meses, o seu investimento irá gerar aproximadamente um
            retorno de: <strong>R$ {resultAlt}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
