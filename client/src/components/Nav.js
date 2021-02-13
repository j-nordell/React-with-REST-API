/*jshint esversion: 6 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Returns the HTML for the navigation including the hard-coded links
 */
const Nav = () => {
  return(
      <>
        <h1 className="header--logo">Courses</h1>
        <nav>
          <NavLink className="signup" to='/signup'>Sign Up</NavLink>
          <NavLink className="signin" to='/signin'>Sign In</NavLink>
        </nav>
      </>
  );
}

export default Nav;