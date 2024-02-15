import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate();
    const HandleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    let token = localStorage.getItem('token');
    const [name, setName] = useState('');

    async function fetchData() {
        const response = await fetch("http://localhost:5000/api/getname/getusername", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: token })
        })

    }

    useEffect(() => {
        fetchData()
    });
    return (

        <>
            <div style={{ background: '#009879', display: 'flex', width: '100%', height: '66px', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link style={{ fontSize: '33px', fontWeight: '900', color: 'white', textDecoration: 'none' }} to="/">Lucid Growth</Link>
                <div className="headerTextContainer">
                    <Link className="headerText" to="/">Home</Link>
                    <Link className="headerText" >Domains</Link>
                    <Link className="headerText" to="/Services">Hosting</Link>
                    <Link className="headerText" to="/Contact">Contact Us</Link>
                </div>

                {!localStorage.getItem('token') ? (<div style={{ display: 'flex', justifyContent: 'space-between', width: '13%' }}>
                    <Link className="btn btn-light" to="/Login" role="button" style={{ display: 'flex', alignItems: 'center' }}>Login</Link>
                    <Link className="btn btn-light" to="/SignUp" role="button" style={{ display: 'flex', alignItems: 'center' }}>Sign up</Link>
                </div>) :
                    (<div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link style={{ fontSize: '18px', fontWeight: '774', color: 'white', textDecoration: 'none', marginRight: '10px' }}>{name}</Link>
                        <button className="btn btn-light" onClick={HandleLogout} style={{ height: '35px' }}>logout</button>
                    </div>)}

            </div>
        </>

    );
}

export default Header;