import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch exchange rate (mocked for demonstration)
    const fetchExchangeRate = async () => {
      // Replace with actual API call to get exchange rate
      const mockExchangeRate = 0.85; // Example: 1 USD = 0.85 EUR
      setExchangeRate(mockExchangeRate);
    };

    fetchExchangeRate();

    // Fetch random currency-related image from Unsplash
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?query=currency&orientation=landscape&client_id=YOUR_UNSPLASH_ACCESS_KEY'
        );
        if (response.ok) {
          const data = await response.json();
          setBackgroundImage(data.urls.regular);
        } else {
          setBackgroundImage('');
        }
      } catch (error) {
        console.error('Error fetching background image:', error);
        setBackgroundImage('');
      }
    };

    fetchBackgroundImage();
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
    <div className="currency-converter container-fluid" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
          <span className="input-group-text">to</span>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="form-control"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div className="result">
          <h2>
            {amount} {fromCurrency} is equal to {(amount * exchangeRate).toFixed(2)} {toCurrency}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
