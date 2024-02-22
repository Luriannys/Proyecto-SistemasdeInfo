import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Header from './components/header/header';

function App() {

  return (
    <>
      <Router>
        <Routes>
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
