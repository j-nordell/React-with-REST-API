import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserSignIn() {
  return(
    <>
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
        </div>
        <form>
          <div>
            <label for="emailAddress" className="">Email address</label>
            <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value="" />
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" className="" placeholder="Password" value="" />
          </div>
          <div className="grid-100 pad-bottom">
            <button className="button" type="submit">Sign In</button>
            <button className="button button-secondary" onClick="event.preventDefault(); location.href='/';">Cancel</button>
          </div>
        </form>
        <p>&nbsp;</p>
        <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
      </div>
    </>
  );
}

export default UserSignIn;