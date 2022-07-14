import React from "react";
import {Routes, Route} from "react-router-dom"

import { Login } from './pages/login/LoginPage'
import { Registration } from './pages/registration/RegistrationPage'
import { Notepage } from './components/Note/Notepage'

export default function App() {
  return(
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/note" element={<Notepage />}/>
  </Routes>
  );
}
