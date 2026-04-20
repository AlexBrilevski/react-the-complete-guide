import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUserFrom.module.css';

const initUserData = {
  name: '',
  age: '',
};

const AddUserForm = ({ onAddUser }) => {
  const [userData, setUserData] = useState(initUserData);
  const [validationError, setValidationError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    const { name, age } = userData;

    if (name.trim().length === 0 ||
      (typeof age === 'string' && age.trim().length === 0)
    ) {
      setValidationError({
        title: 'Invalid input',
        message: 'Please enter user name and age (non-empty values).',
      });
      return;
    }

    if (name.trim().length < 3) {
      setValidationError({
        title: 'Invalid name',
        message: 'User name must be at least 3 characters long.',
      });
      return;
    }

    if (+age < 1) {
      setValidationError({
        title: 'Invalid age',
        message: 'User age must be at greater than 0.',
      });
      return;
    }

    if (validationError) {
      setValidationError(null);
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
    <>
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
      {validationError && (
        <ErrorModal
          error={validationError}
          onConfirm={() => setValidationError(null)}
        />
      )}
    </>
  );
};

export default AddUserForm;
