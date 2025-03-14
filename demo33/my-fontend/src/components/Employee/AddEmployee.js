import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name ) {
            setError('Please fill in all fields correctly.');
            return;
        }

        const newEmployee = { name , age, salary };
        setLoading(true);
        setError('');

        try {
            await axios.post('/employees/create', newEmployee);
            alert('Employee has been added!');
            setName('');
            setAge('');
            setSalary('');

        } catch (error) {
            console.error('Error adding employee:', error);
            setError('An error occurred while adding the employee.!');
        } finally {
            setLoading(false);
        }
    };

    const goBackToEmployeeList = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h2 className="my-4">Create Employee</h2>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '450px' }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="number"
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
                        type="text"
                        id="number"
                        className="form-control"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                        style={{ width: '450px' }}
                    />
                </div>

                <div className="d-flex ">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Adding employee...' : 'Adding employee'}
                    </button>
                    ||
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

export default AddEmployee;