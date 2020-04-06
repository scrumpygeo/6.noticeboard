import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-light text-dark'>
      <div className='nav-item'>
        <Link to='/'>Noticeboard</Link>
      </div>
      <div className='float-right'>
        <div className='nav-item float-left pr-3 pt-1'>
          <Link to='/'>All Notices</Link>
        </div>
        <div className='nav-item float-right'>
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

export default Header;
