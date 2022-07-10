import React from "react";
import {Routes, Route, Link} from "react-router-dom"

import { Login } from './pages/Login'
import { Registration } from './pages/Registration.jsx'

export default function App() {
  return(
  <>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/registration" element={<Registration/>}/>
  </Routes>
  </>
  );
}
