import { useNavigate, Link } from "react-router-dom";
import React from 'react'
import Table from './Table';
const Home = () => {
   
    return (
        <>
            <div className="homeContainer">
                <div className="homeLeftContainer">
                    <h1>Lucid Growth</h1>
                    <p>A web application to provide a central dashboard for automating management of domains and DNS records in bulk on Azure.</p>
                    <Link className="rightHomeContainerText" to="/table"><h1>Click here to View Dashboard</h1></Link>
                </div>
                <div className="rightHomeContainer">
                    <img src={require('./img.png')} alt="b2b" />
                </div>
            </div>
        </>


    );

}

export default Home;