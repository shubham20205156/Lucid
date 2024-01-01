import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BuyCoin = (props) => {
    const location = useLocation();
    const buyQuery = new URLSearchParams(location.search).get('query');
    const obj = JSON.parse(buyQuery);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const user = localStorage.getItem('id');
    const Buy = async () => {

        if ((obj.marketCap / obj.price) < inputValue) {
            let price = parseInt(obj.marketCap / obj.price);
            props.showAlert(`stock limit exceeded : you can not buy more than ${price} stocks`, "danger");
        }
        else {

            const token = localStorage.getItem('token');
            if (!token) {
                props.showAlert(`please login before buying Coins`, "danger");
                navigate("/");
                console.log("laude");
            }
            else {
                let name = obj.name;
                let price = obj.price;
                let marketCap = obj.marketCap;
                let DailyChange = obj.DailyChange;
                let image = obj.image;
                let quantity = inputValue;

                const response = await fetch("http://localhost:5000/api/stocks/addCoins", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "name": name, "price": price, "marketCap": marketCap, "DailyChange": DailyChange, "Image": image, "quantity": quantity,"user":user })
                });

                const json = await response.json();
                console.log(json);
                navigate("/DigitalCurrency ")
                props.showAlert(`${obj.name} bought successfully`, "success");
            }
        }

    }
    const HandleInput = (e) => {
        const val = e.target.value;
        if (/^[1-9]\d*$/.test(val) || val === '') {
            setInputValue(val);
        }
    }

    return (
        <div>
            <div class="card mb-3" style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '345px', marginTop: '54px' }}>
                <img src={obj.image} style={{ width: '15%', height: '20%', position: 'absolute', marginLeft: '367px', marginBottom: '178px' }} class="card-img-top" alt="..." />
                <div class="card-body" style={{ marginLeft: '23px' }}>
                    <h5 class="card-title">{obj.name}</h5>
                    <p class="card-text">Current Price : {obj.price}$</p>
                    <p class="card-text">Market Capitalization : {obj.marketCap}$</p>
                    <p class="card-text">Daily Changes : {obj.DailyChange}</p>
                    <h6>Enter no of coins you want to buy</h6>
                    <input type="text" value={inputValue} onChange={HandleInput} style={{ width: '200px', height: '35px', marginTop: '12px' }} placeholder="No. of Coins" />
                    <button type="submit" class="btn btn-success " onClick={Buy} style={{ marginLeft: '32px' }}>Buy Now</button>

                </div>
            </div>
        </div>
    )
}

export default BuyCoin