import UserItem from "./UserItem";

import classes from './UsersList.module.css';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <p className={classes['fallback-text']}>
        No users added yet.
      </p>
    );
  }

  return (
    <ul className={classes['users-list']}>
      {users.map(user => (
        <li key={user.id}>
          <UserItem {...user} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
