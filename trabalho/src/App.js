// src/App.js
import React, { useState } from 'react';
import UserList from './componentes/UserList';
import AddUser from './componentes/AddUser';
import EditUser from './componentes/EditUser';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const user = users.find((user) => user.id === id);
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditing(false);
    setCurrentUser(null);
  };

  return (
    <div>
      <h1>Página de Login</h1>
      {editing ? (
        <EditUser currentUser={currentUser} onUpdate={updateUser} />
      ) : (
        <AddUser onAdd={addUser} />
      )}
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
};

export default App;

