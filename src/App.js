import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSignup/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/login" element={<UserLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;