import UserItem from "./UserItem";

import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <Card>
        <p className={classes['fallback-text']}>
          No users added yet.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <ul className={classes['users-list']}>
        {users.map(user => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
