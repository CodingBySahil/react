import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="currency-converter container">
      <div className="content bg-light p-4 rounded shadow-sm">
        <h1 className="mb-4 text-center">Currency Converter</h1>
        <div className="row justify-content-center mb-3">
          <div className="col-md-4">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="form-control"
              placeholder="Enter amount"
            />
          </div>
          <div className="col-md-2">
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="form-control"
            >
              <option value="USD" className="text-center">USD</option>
            </select>
          </div>
          <div className="col-md-auto align-self-center">
            <span className="input-group-text bg-success text-light text-center"> TO </span>
          </div>
          <div className="col-md-2">
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="form-control"
            >
              <option value="PKR" className="text-center">PKR</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="result bg-white p-3 rounded text-center">
              <h2>
                {`${amount} ${fromCurrency} = ${(amount * 278).toFixed(
                  2
                )} ${toCurrency}`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
