import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utilities/PrivateRoute';

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <h1 className="text-center">Magic Link test</h1>
      <Router>
        <PrivateRoute path="/" exact component={Dashboard}/>
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
