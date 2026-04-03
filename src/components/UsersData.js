import UserItem from "./UserItem";

import classes from './UsersData.module.css';

const UsersList = () => {
  return (
    <div className={classes.usersData}>
      <ul className={classes.usersList}>
        <li>
          <UserItem />
        </li>
        <li>
          <UserItem />
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
