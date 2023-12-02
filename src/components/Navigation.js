import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import ViewEmployeeList from "./ViewEmployeeList";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import ViewAnEmployee from "./ViewAnEmployee";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSignup />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/view-employees" element={<ViewEmployeeList />} />
        <Route path="/view-employees/:id" element={<ViewAnEmployee />} />
        <Route path="/add-employees" element={<AddEmployee />} />
        <Route path="/update-employees/:id" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default Navigation;

