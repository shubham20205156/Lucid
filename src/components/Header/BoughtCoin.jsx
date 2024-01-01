import React, { useEffect, useState } from 'react'
import BoughtCoinBox from '../Portfolio/BoughtCoinsBox';
const BoughtCoin = () => {
    const [data, setData] = useState([]);

    const fetchAllCoins = async () => {
        const userId = localStorage.getItem('id');
        const response = await fetch("http://localhost:5000/api/stocks/fetchCoins", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userId })
        })
        const coinValue = await response.json();
        setData(coinValue);
    }
    useEffect(() => {
        fetchAllCoins();
    }, [])
    return (
        <div className="container my-3">
            <div className="row">
                {data.map((element) => {
                    return <div className="col-md-4">
                        <BoughtCoinBox name={element.name} image={element.Image} id={element.id} market_cap={element.marketCap} DailyChange={element.DailyChange} current_price={element.price} quantity={element.quantity} />
                    </div>
                })}               
            </div>
            <div className="boughtStocks"></div>
        </div>
    )
}
export default BoughtCoin