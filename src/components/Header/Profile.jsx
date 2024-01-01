import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
  const name = localStorage.getItem('name');
  return (
    <div>
      <div className="mainContainerProfile">
        <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}> Here are Your Investments Mr. {name}</h2>
        <div className="main" style={{marginTop:'23px'}}>
          <div className="profileContainer">
            <Link to="/BoughtCoin"><div className="ProfileCoinBox">
              <div style={{ marginLeft: '6px' }}>
                <p style={{ color: 'black', fontSize: '22px' }}>Total Investment in Coins</p>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <p style={{color:'black'}}>Invested Value : </p>
                  <p>456.17$</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <p style={{color:'black'}}>Current Value : </p>
                  <p>469.34$</p>
                </div>
              </div>
            </div></Link>
            <div className="ProfileStockBox">
              <div style={{ marginLeft: '6px' }}>
                <p style={{ color: 'black', fontSize: '22px' }}>Total Investment in stocks</p>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <p style={{color:'black'}}>Invested Value : </p>
                  <p>456.17$</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <p style={{color:'black'}}>Current Value : </p>
                  <p>469.34$</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className="verticleLine"></div>
          <div className="totalInvestment">
              <p>Available Balance :</p>
              <p>Total Invested Amount :</p>
              <p>Total Returns : </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile