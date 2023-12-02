import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table, Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
 
const ViewEmployeeList = () => {
 const location = useLocation();
 const username = location.state?.username;
 const [employees, setEmployees] = useState([]);
 const navigate = useNavigate();
 const URL = "https://as1-mwuu.onrender.com";
 
 const api = axios.create({
   baseURL: `${URL}/api/v1/emp`,
   timeout: 1000,
   headers: { "Access-Control-Allow-Origin": "*" },
 });
 
 useEffect(() => {
   api
     .get("/employees")
     .then((response) => {
       setEmployees(response.data);
     })
     .catch((error) => {
       console.error("Error fetching data: ", error);
     });
 }, []);
 
 const deleteEmployeeDataByID = (id) => {
   api
     .delete(`/employees/${id}`)
     .then((res) => {
       console.log(res.data + " The " + id + " has been deleted");
       const updatedEmployees = employees.filter((emp) => emp._id !== id);
       setEmployees(updatedEmployees);
       alert("Employee " + id + " has been deleted");
       navigate("/view-employees");
     })
     .catch((error) => {
       console.error("Error deleting employee: ", error);
     });
 };
 
 return (
   <Container>
     <Header username={username} />
     <Row className="justify-content-md-center">
       <Col md={12}>
         <h1 className="text-center my-4">Employee List</h1>
         <Card className="mb-4">
           <Card.Body>
             <Link
               to={"/add-employees"}
               className="btn btn-light"
               style={{ color: "blue" }}
             >
               Add Employee
             </Link>
           </Card.Body>
         </Card>
         <Table striped bordered hover>
           <thead className="bg-danger text-white">
             <tr>
               <th>Employee ID</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email Id</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {employees.map((emp) => (
               <tr key={emp._id}>
                 <td>{emp._id}</td>
                 <td>{emp.first_name}</td>
                 <td>{emp.last_name}</td>
                 <td>{emp.email}</td>
                 <td>
                   <Link
                     to={`/update-employees/${emp._id}`}
                     className="btn btn-success me-2"
                   >
                     Update
                   </Link>
                   <Button
                     onClick={() => deleteEmployeeDataByID(emp._id)}
                     className="btn-danger"
                   >
                     Delete
                   </Button>
                   <Link
                     to={`/view-employees/${emp._id}`}
                     className="btn btn-primary me-2"
                   >
                     View
                   </Link>
                 </td>
               </tr>
             ))}
           </tbody>
         </Table>
       </Col>
     </Row>
   </Container>
 );
};
 
export default ViewEmployeeList;
 