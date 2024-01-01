// import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockBox from './StockBox';


const apiKey = 'KAF236EQNXXTJSIE';
const apiUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=' + apiKey;
// const apiKey = '328ea133d14999bb3c71a38ca3e0a972';
// const apiUrl = 'https://api.marketstack.com/v1/tickers/aapl/eod' + apiKey;

export default function IndianStocks() {
  const [stockData, setStockData] = useState(null);

  async function fetchStock2() {

    let response = await axios(apiUrl);
    let stockVal = response.data;
    setStockData(stockVal);
    console.log(stockData);

  }
  useEffect(() => {
    fetchStock2();
  }, [])

  return (
    <div>
      <h1>IndianStocks</h1>
      {stockData && <pre>{JSON.stringify(stockData, null, 2)}</pre>}
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    </div>
  );
}
