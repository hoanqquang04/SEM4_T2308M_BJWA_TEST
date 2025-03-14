import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getUsers, addUser, updateUser, deleteUser } from '../services/api';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleAddUser = async (user) => {
        try {
            if (editingUser) {
                await updateUser(editingUser.id, user);
                setEditingUser(null);
            } else {
                await addUser(user);
            }
            fetchUsers();
        } catch (error) {
            console.error('Error adding/updating user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container mt-5">
            <UserForm onSubmit={handleAddUser} initialData={editingUser || {}} />
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default Home;