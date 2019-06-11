import React from 'react';
import logo from './logo.svg';
import './signin.css';

function Signin() {
  return (
    <div className="item1">
      <label>Sign  Up</label><br/><br/>
      <form >
          <label>Name</label><br/>
          <input type="text"   className="name"></input><br/><br/>
          <label>Email</label><br/>
          <input type="text"  name="name" className="ename"></input><br/><br/>
          <label>Password</label><br/>
          <input type="text"  name="name" className="pname"></input><br/><br/>
          <label>Confirmation</label><br/>
          <input type="text"  name="name" className="cname"></input><br/><br/>
          <input type="button" value="create my account" name="create my account" className="item2"></input>
      </form>
    </div>
  );
}

export default Signin;