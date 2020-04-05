import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-light'>
      <div>
        <Link to='/'>Notes</Link>
      </div>
    </nav>
  );
};

export default Header;
