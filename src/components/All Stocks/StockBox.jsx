import React from 'react'
const ButtonStyle={
    color:'blue'
}

export default function StockBox() {
    return (
        <div>
            <div class="card my-3" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    
                  
                    <p class="card-text"> current price INR</p>
                    <p class="card-text">Market Cap : INR</p>
                    <p class="card-text">Daily Change :</p>
                    <button type="button" class="btn btn-primary btn-sm" style={ButtonStyle}>Buy Now</button>
                    <button type="button" class="btn btn-primary btn-sm" style={ButtonStyle}>Read News</button>
                </div>
            </div>
        </div>
    )
}
