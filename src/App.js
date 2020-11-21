
import React from "react";
import styled from 'styled-components'
import { Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AddWord from './pages/AddWord';
import RegisterPage from './pages/RegisterPage';
const StyledWrapper = styled.div`


`
function App() {

  return (
    <StyledWrapper>
      <div>
        <div><Link to="/login">Login Page</Link>  </div>
        <div> <Link to="/register/1">Register Page</Link>  </div>
        <div>  <Link to="/add-word">AddWord</Link></div>
        <div><Link to="/">Home Page</Link></div>
      </div>
      <Switch>

        <Route path="/add-word">
          <AddWord />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>


        <Route path="/">
          <HomePage />
        </Route>


      </Switch>
    </StyledWrapper>
  );
}

export default App;
