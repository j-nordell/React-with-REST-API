import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserSignUp() {
  return(
    <>
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
        </div>
        <form method="POST">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value="" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value="" />
          </div>
          <div>
            <label htmlFor="emailAddress">Email address</label>
            <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value="" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password"
                  value="" />
          </div>
          <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='/';">Cancel</button></div>
        </form>
      </div>
    </>
  );
}

export default UserSignUp;