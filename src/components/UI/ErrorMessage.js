import Card from "./Card";
import Button from './Button';

import classes from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <Card className={classes['input-validation-error']}>
      {message}
      <Button onClick={onClose}>
        Ok
      </Button>
    </Card>
  );
};

export default ErrorMessage;
