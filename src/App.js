import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Signin from './Components/Task1/Signin';
import Signup from './Components/Task1/Signup';
import LifecycleA from './Components/LifecycleA';
import Taskone from './Components/Task2/Taskone';
import Taskth from './Components/Task2/Taskth';
import Taskfo from './Components/Task2/Taskfo';
import Arithmatic from './Components/Task3/Arithmatic';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'; 
  
function App() {
  return (
    <div className="App">
      {/* <Signin/>
      <Signup/> */}
      {/* <LifecycleA/> */}
      {/* <Taskone/>
      <Taskth/>
      <Taskfo/> */}
      <Router>
        <Switch>
        <Route exact path='/' component={Signin}></Route>
        <Route exact path='/Signup' component={Signup}></Route>
        <Route exact path='/LifecycleA' component={LifecycleA}></Route>
        <Route exact path='/Taskone' component={Taskone}></Route>
        <Route exact path='/Taskth' component={Taskth}></Route>
        <Route exact path='/Taskfo' component={Taskfo}></Route>
        <Route exact path='/Arithmatic' component={Arithmatic}></Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
