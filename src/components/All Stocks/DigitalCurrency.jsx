import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CoinBox from './CoinBox';



export default function DigitalCurrency() {
  const [stock, setStock] = useState([]);
  async function fetchStock() {
    let response = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=33&page=1&sparkline=false`);

    let stockVal = await response.data;
    setStock(stockVal);
    
  }
  useEffect(() => {
    fetchStock()
  }, []);
  
    return (
      <div>
        
        <div className="container">
            <div className="row">
              {stock.map((element) => {
                return <div className="col-md-4">
                  <CoinBox name={element.name} image={element.image} id={element.id}  market_cap={element.market_cap} DailyChange={element.market_cap_change_percentage_24h}
                  current_price={element.current_price}/>
                </div>
              })}
            </div>           
          </div>
  
      </div>
    )
}
