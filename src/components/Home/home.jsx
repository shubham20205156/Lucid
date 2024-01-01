import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react'
const Home = () => {
      const[searchValue,setSearchValue]=useState('');
      const navigate = useNavigate();
      const handleSearch= async(e) =>{
        e.preventDefault();
        navigate(`/Search?query=${searchValue}`);
      }
    return (
        <>
            <div class="homeContainer">
                <div class="homeLeftContainer " >
                    <div class="d-flex ">
                        <form class="d-flex" onSubmit={handleSearch} style={{ position: 'absolute', marginTop: '122px', marginLeft: '122px', width: '30rem' }}>
                            <input class="form-control mr-sm-2" type="search" id="search" value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} placeholder="Search about Stocks / mutual funds / bitcoins" aria-label="Search" />
                            <button class="btn btn-success my-2 my-sm-0 mx-3" type="submit" >Search</button>
                        </form>
                    </div>
                    <h1 class="HomePara">Learn How to Invest </h1>
                    <h1 class="HomePara2"> Without Risk</h1>
                    <p class="HomePara3">FreeStock is a free and simple plateform where you can learn how to invest in</p>
                    <p class="HomePara4">stock market without risking your money</p>
                </div>
                <div class="homeRightContainer">
                    <div class="TopContainer" style={{display: 'flex'}}>

                        <Link to="/IndianStocks" style={{color:'black',textDecoration:'none'}}>
                            <div class="card mx-3" id="homeImage1" style={{ width: '190px' }}>
                                <img class="card-img-top" src="https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 >Indian Stocks</h5>
                                </div>
                            </div>
                        </Link>
                        <Link to="/DigitalCurrency" style={{color:'black',textDecoration:'none'}}>
                            <div class="card mx-3" id="homeImage2" style={{ width: '190px' }}>
                                <img class="card-img-top" src="https://media.istockphoto.com/id/1178277803/photo/crypto-currency-blockchain-concept-with-coin-on-the-motherboard.jpg?s=612x612&w=0&k=20&c=gUf9oeJEzkgRruciJetsF3TeqTp65JPouHQtF0uGhWM=" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" >Digital Currency</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="BottomContainer" style={{display: 'flex'}}>
                        <Link to="/MutualFunds" style={{color:'black',textDecoration:'none'}}>
                            <div class="card mx-3 my-3" id="homeImage3" style={{ width: '190px' }}>
                                <img class="card-img-top" src="https://media.istockphoto.com/id/170141153/photo/making-money-with-mutual-funds-for-retirement.jpg?s=612x612&w=0&k=20&c=YqgH6kHN-BwdHevP9VPDgf7wrgwWY-MSM_qAqnPx5Lo=" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" >Mutual Funds</h5>

                                </div>
                            </div>
                        </Link>
                        <Link to="/UsStocks" style={{color:'black',textDecoration:'none'}}>
                            <div class="card mx-3 my-3" id="homeImage4" style={{ width: '190px' }}>
                                <img class="card-img-top" src="https://media.istockphoto.com/id/1130260211/photo/us-dollar-bills-on-a-background-with-dynamics-of-exchange-rates-trading-and-financial-risk.jpg?s=612x612&w=0&k=20&c=48MqMGgtmMssdVtSvzcw-Jz_6mWvfQy6J4mbI1NnRzQ=" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" >Us Stocks</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>


    );

}

export default Home;