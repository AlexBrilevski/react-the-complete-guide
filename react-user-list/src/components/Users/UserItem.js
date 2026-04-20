import classes from './UserItem.module.css';

const UserItem = ({ name, age }) => {
  return (
    <div className={classes.userItem}>
      <p className={classes.name}>{name}</p>
      <p>({age} years old)</p>
    </div>
  );
};

export default UserItem;
