import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployessList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEmployees = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/employees');
            console.log('Fetched Employees:', response.data);
            setEmployees(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching employees:', error);
            setError(`Error: ${error.response?.status || '500'} - ${error.response?.data || 'Unable to connect to server!'}`);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = async (employeesId) => {
        try {
            await axios.delete(`/employees/delete/${employeesId}`);
            alert('Employees has been deleted!');
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
            alert('An error occurred while deleting the employee.!');
        }
    };



    if (loading) {
        return <div>Loading catalog...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h3>List of User</h3>
            <Link to="/add-employee" className="btn btn-primary mb-3">Create</Link>
            {employees.length > 0 ? (
                <table className="table table-bordered ">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id || 'Chưa có Id'}</td>
                            <td>{employee.name || 'Chưa có tên'}</td>
                            <td>{employee.age || 'Chưa có tuổi'}</td>
                            <td>{employee.salary || 'Chưa có lương'}</td>


                            <td>
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>

                                ||
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(employee.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>There are no employess to display.</p>
            )}
        </div>
    );
};

export default EmployessList;