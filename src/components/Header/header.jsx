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

        const data = await response.json();
        localStorage.setItem('id', data._id);
        setName(data.name);
        localStorage.setItem('name', data.name);
    }

    useEffect(() => {
        fetchData()
    });
    return (

        <>
            <div style={{ background: 'linear-gradient(to right, #000cff, #c300ff)', display: 'flex', width: '100%', height: '66px', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link style={{ fontSize: '40px', fontWeight: '900', color: 'white', textDecoration: 'none' }} to="/">FreeStock</Link>
                <div style={{ width: '34%', display: 'flex', justifyContent: 'space-between', listStyle: 'none', color: 'white' }}>
                    <Link style={{ fontSize: '22px', fontWeight: '774', color: 'white', textDecoration: 'none' }} to="/">Home</Link>
                    <Link style={{ fontSize: '22px', fontWeight: '774', color: 'white', textDecoration: 'none' }} to="/About">About</Link>
                    <Link style={{ fontSize: '22px', fontWeight: '774', color: 'white', textDecoration: 'none' }} to="/Services">Services</Link>
                    <Link style={{ fontSize: '22px', fontWeight: '774', color: 'white', textDecoration: 'none' }} to="/Contact">Contact Us</Link>
                </div>

                {!localStorage.getItem('token') ? (<div style={{ display: 'flex', justifyContent:'space-between',width:'13%' }}>
                    <Link className="btn btn-light" to="/Login" role="button" style={{ display:'flex',alignItems:'center' }}>Login</Link>
                    <Link className="btn btn-light" to="/SignUp" role="button" style={{ display:'flex',alignItems:'center' }}>Sign up</Link>
                </div>) :
                    (<div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link style={{ fontSize: '18px', fontWeight: '774', color: 'white', textDecoration: 'none', marginRight: '10px' }} to="/Profile">{name}</Link>
                        <button className="btn btn-light" onClick={HandleLogout} style={{ height: '35px' }}>logout</button>
                    </div>)}
                
            </div>
        </>

    );
}

export default Header;