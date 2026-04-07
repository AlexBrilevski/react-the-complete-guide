import React, { useState } from 'react';
import UserDataForm from './components/UserDataForm';
import Users from './components/Users';

const initUsers = [];

function App() {
  const [users, setUsers] = useState(initUsers);

  const addUser = (userData) => {
    const id = Math.random().toString();

    setUsers(prevUsers => [{ id, ...userData }, ...prevUsers]);
  };

  return (
    <div>
      <UserDataForm onAddUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
