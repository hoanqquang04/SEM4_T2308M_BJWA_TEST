import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`/employees/${id}`);
                const employee = response.data;
                setName(employee.name);
                setAge(employee.age);
                setSalary(employee.salary);

            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployee();
    }, [id]);

    const goBackToEmployeeList = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedEmployee = { name , age, salary };

        try {
            await axios.put(`/employees/update/${id}`, updatedEmployee);
            alert('Employee updated successfully!');

            setName('');
            setAge('');
            setSalary('');
            navigate('/');
        } catch (error) {
            console.error('Error updating employee:', error);
            alert('An error occurred while updating the employee!');
        }
    };

    return (
        <div className="container">
            <h2 className="mb-4">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder=" Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '450px' }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        style={{ width: '450px' }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                        style={{ width: '450px' }}
                    />
                </div>

                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Update Employee
                    </button>
                    <span style={{ margin: '0 10px' }}>||</span>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={goBackToEmployeeList}
                    >
                        Back to Employee List
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEmployee;