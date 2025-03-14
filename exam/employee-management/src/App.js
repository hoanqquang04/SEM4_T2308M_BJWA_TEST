import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <div className="container">
                <h1 className="text-center mt-3">Quản lý nhân viên</h1>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add" element={<EmployeeForm />} />
                    <Route path="/edit/:id" element={<EmployeeForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
