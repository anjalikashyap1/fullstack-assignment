import React from 'react';
import { useNavigate } from 'react-router-dom';
import  logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate('/new-card'); 
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Abstract Logo" className="logo" />
        <span>Abstract | Help Center</span>
      </div>
      <button className="request-button"  onClick={handleRequestClick}>Submit a request</button>
    </header>
  );
};

export default Header;
