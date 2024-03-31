import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./view/pages/login/login";
import Register from "./view/pages/register/register";
import Landing from "./view/pages/landing/landing";
import Dashboard from "./view/pages/dashboard/dashboard";
import Agrupacion from "./view/pages/agrupacion/agrupacion";
import MenuAgrup from "./view/pages/menuAgrup/menuAgrup";
import  Perfil  from "./view/pages/Perfil/Perfil";
import  Donaciones  from "./view/pages/donaciones/donaciones";

import { ProtectedRoute } from "./view/components/protectedRoutes/ProtectedRoute";
import {onAuthStateChanged} from "firebase/auth"
import {useEffect, useState} from "react"
import { auth } from "./controller/services/firebase";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/login" element={<Login currentUser={currentUser}/>}></Route>

          <Route exact path="/register" element={<Register currentUser={currentUser}/>}></Route>
        
          <Route exact path="/dashboard" element={
          <ProtectedRoute currentUser={currentUser}>
          <Dashboard />
          </ProtectedRoute>
        }
        ></Route>

          <Route exact path="/menuAgrup" element={
          <ProtectedRoute currentUser={currentUser}>
          <MenuAgrup />
          </ProtectedRoute>
          }
          ></Route>

          <Route exact path="/agrupacion/:id" element={
          <ProtectedRoute currentUser={currentUser}>
          <Agrupacion />
          </ProtectedRoute>
          }
          ></Route>

          <Route exact path='/Perfil' element={
          <ProtectedRoute currentUser={currentUser}>
          <Perfil/>
          </ProtectedRoute>
          }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
