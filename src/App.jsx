import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./view/pages/login/login";
import Register from "./view/pages/register/register";
import Landing from "./view/pages/landing/landing";
import Dashboard from "./view/pages/dashboard/dashboard";
import Agrupacion from "./view/pages/agrupacion/agrupacion";
import MenuAgrup from "./view/pages/menuAgrup/menuAgrup";
import  Perfil  from "./view/pages/Perfil/Perfil";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/menuAgrup" element={<MenuAgrup />}></Route>
          <Route exact path="/agrupacion/:id" element={<Agrupacion />}></Route>
          <Route exact path='/Perfil' element={<Perfil/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
