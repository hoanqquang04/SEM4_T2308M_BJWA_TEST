import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="card p-3">
            <h3>List of Users</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>
                                <button
                                    className="btn btn-success me-2"
                                    onClick={() => onEdit(user)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(user.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;