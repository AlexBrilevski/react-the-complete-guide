import UserItem from "./UserItem";

import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={classes['users-list']}>
      <ul>
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
