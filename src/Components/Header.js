import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/login-logo.png';



const Header = () => {
    const navigate=useNavigate();

    const handleLogout=()=>{
        sessionStorage.removeItem("auth");
        navigate("/");
      }
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className='img-wrapper'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='profile'>
           <Link to='/charts'> <button className='btn btn-info'>Charts</button></Link>
            <button className='btn btn-danger ms-5' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Header