
import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}<br/>
            <button class="editbt" onClick={() => onEdit(user.id)}>✏️</button><br/>
            <button class="deletebt" onClick={() => onDelete(user.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
