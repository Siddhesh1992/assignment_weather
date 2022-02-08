import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
      <Link className='navbar-brand' aria-current='page' to='/'>
        <div className='container-fluid'>Weather App</div>
       
      </Link>
      <Link className="nav-link" to="/addCity">Add City</Link>
    </nav>
  );
};

export default Header;
