import React from 'react';
import UserDataForm from './components/UserDataForm';
import Users from './components/Users';

const initUsers = [];

function App() {
  return (
    <div>
      <UserDataForm />
      <Users users={initUsers} />
    </div>
  );
}

export default App;
