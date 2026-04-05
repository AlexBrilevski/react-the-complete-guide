import classes from './Users.module.css';
import UsersList from './UsersList';

const Users = ({ users }) => {
  return (
    <div className={classes.users}>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
