import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, createEmployee, updateEmployee } from "../services/employeeService";

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({ name: "", email: "", salary: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchEmployee(id);
        }
    }, [id]);

    const fetchEmployee = async (id) => {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(id, employee);
        } else {
            await createEmployee(employee);
        }
        navigate("/");
    };

    return (
        <div className="container">
            <h2>{id ? "Sửa nhân viên" : "Thêm nhân viên"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Tên</label>
                    <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={employee.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Lương</label>
                    <input type="number" className="form-control" name="salary" value={employee.salary} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">{id ? "Cập nhật" : "Thêm mới"}</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>Hủy</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
