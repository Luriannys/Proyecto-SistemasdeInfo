import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Login from './view/pages/login/login';
import Register from './view/pages/register/register';
import Landing from './view/pages/landing/landing';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Landing />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Register />}
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
