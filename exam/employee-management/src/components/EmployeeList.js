import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div className="container">
            <h2>Danh sách nhân viên</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>
                Thêm nhân viên
            </button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Lương</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>${emp.salary}</td>
                            <td>
                                <button className="btn btn-info me-2" onClick={() => navigate(`/edit/${emp.id}`)}>
                                    Sửa
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
