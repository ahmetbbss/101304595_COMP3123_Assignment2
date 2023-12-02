import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={UserSignup} />
        <Route path="/login" component={UserLogin} />
      </Routes>
    </Router>
  );
}

export default App;