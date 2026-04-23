import classes from './meals-loading-page.module.css';

const MealsLoadingPage = () => {
  return (
    <p className={classes.loading}>Fetching meals...</p>
  );
};

export default MealsLoadingPage;
