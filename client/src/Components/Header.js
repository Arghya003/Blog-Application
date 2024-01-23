import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Regsiter</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header
