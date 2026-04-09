import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUserFrom.module.css';

const initUserData = {
  name: '',
  age: '',
};

const AddUserForm = ({ onAddUser }) => {
  const [userData, setUserData] = useState(initUserData);

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(userData);

    if (userData.name.length === 0) {
      console.log('Please enter user name');
      return;
    }

    if (userData.name.length < 3) {
      console.log('User name must be at least 3 characters long');
      return;
    }

    if (userData.age <= 0) {
      console.log('User age must be at greater than 0');
      return;
    }

    onAddUser(userData);
    setUserData(initUserData);
  };

  const inputChangeHandler = (fieldId, e) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [fieldId]: fieldId === 'age' ? +e.target.value : e.target.value,
    }));
  };

  return (
    <Card className={classes['add-user-form']}>
      <form onSubmit={addUserHandler}>
        <div className={classes['form-controls']}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={userData.name}
            onChange={(e) => inputChangeHandler('name', e)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userData.age}
            onChange={(e) => inputChangeHandler('age', e)}
          />
        </div>
        <div className={classes['form-actions']}>
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUserForm;
