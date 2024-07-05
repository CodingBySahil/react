import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    // Fetch exchange rate (mocked for demonstration)
    const fetchExchangeRate = async () => {
      // Replace with actual API call to get exchange rate
      const mockExchangeRate = 278; // Example: 1 USD = 278 PKR
      setExchangeRate(mockExchangeRate);
    };

    fetchExchangeRate();
  }, []);

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
    <div className="currency-converter container-fluid">
      <div className="content">
        <h1>Currency Converter</h1>
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="form-control"
            placeholder="Enter amount"
          />
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="form-control"
          >
            <option value="USD">USD</option>
          </select>
          <span className="input-group-text">to</span>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="form-control"
          >
            <option value="PKR">PKR</option>
          </select>
        </div>
        <div className="result">
          <h2>
            {amount} {fromCurrency} is equal to{" "}
            {(amount * exchangeRate).toFixed(2)} {toCurrency}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
