import classes from './UserDataFrom.module.css';

const UserDataForm = () => {
  return (
    <form className={classes.userDataForm}>
      <div className={classes.formControls}>
        <div className={classes.formControl}>
          <label htmlFor="name">Name</label>
          <input id="name" />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="age">Age</label>
          <input id="age" />
        </div>
      </div>
      <div className={classes.formActions}>
        <button>Add</button>
      </div>
    </form>
  );
};

export default UserDataForm;
