import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import Card from './components/UI/Card';

const initUsers = [];

function App() {
  const [users, setUsers] = useState(initUsers);

  const addUser = (userData) => {
    const id = Math.random().toString();

    setUsers(prevUsers => [{ id, ...userData }, ...prevUsers]);
  };

  return (
    <div>
      <Card>
        <AddUserForm onAddUser={addUser} />
      </Card>
      <Card>
        <UsersList users={users} />
      </Card>
    </div>
  );
}

export default App;
