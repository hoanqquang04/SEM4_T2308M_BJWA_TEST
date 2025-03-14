import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/Employee/AddEmployee";
import UpdateEmployee from "./components/Employee/UpdateEmployee";
import EmployeeList from "./components/Employee/EmployeeList";




function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/edit-employee/:id" element={<UpdateEmployee />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;