import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {FormStep1} from "./pages/FormStep1";
import {FormStep2} from "./pages/FormStep2";
import {FormStep3} from "./pages/FormStep3";
export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<FormStep1/>}></Route>
            
            <Route path="/step2" element={<FormStep2/>}></Route>
            
            <Route path="/step3" element={<FormStep3/>}></Route>
        </Routes>
    </Router>
  )
}