import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utilities/PrivateRoute';
import AuthContext from './context/AuthContext';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Header from "./components/Header";

const auth = { isLoggedIn : false }



function App() {
  const [ login, setLogin ] = useState(false);
  return (
    <AuthContext.Provider value={{login, setLogin}}>
      <Router>
        <Header />
        <PrivateRoute path="/" exact component={Dashboard}/>
        <Route path="/login" component={Login} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
