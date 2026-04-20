import React, { useState } from 'react';
import AddUserForm from './components/Users/AddUserForm';
import UsersList from './components/Users/UsersList';

const initUsers = [];

function App() {
  const [users, setUsers] = useState(initUsers);

  const addUser = (userData) => {
    const id = Math.random().toString();

    setUsers(prevUsers => [{ id, ...userData }, ...prevUsers]);
  };

  return (
    <div>
      <AddUserForm onAddUser={addUser} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
