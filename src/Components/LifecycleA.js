import React, { Component } from 'react';
import { directive } from '@babel/types';

class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'vindya'
        }
        console.log('LifecycleA intilization')
    }
    componentDidMount(){
        console.log('LifecycleA component Didmount')
    };
    componentWillMount(){
        console.log('LifecycleA component WillMount')
    };
    render(){
        return(
            <div><br/><br/>
      <div className="item"> 

      <label className="sign">LOGIN</label><br/><br/>
      <form>
          <input type="text"  name="name" placeholder="email Address"></input><br/><br/>
          <input type="text"  name="name" placeholder="password"></input><br/><br/>
          <input type="button" value="Login" name="Login" className="login"></input>
          <p>Forgot my password?</p>
      </form>
      </div>
      <div className="account">Don't have an account?<a href="Signin.js">Login</a></div>
    </div>
  );
}
}

export default LifecycleA;