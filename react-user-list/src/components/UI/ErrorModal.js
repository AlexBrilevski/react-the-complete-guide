import Card from "./Card";
import Button from './Button';

import classes from './ErrorModal.module.css';

const ErrorModal = ({ error, onConfirm }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>
            Ok
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
