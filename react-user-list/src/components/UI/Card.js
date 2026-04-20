import classes from './Card.module.css';

const Card = ({className, children}) => {
  return (
    <div className={`${classes.card}${className ? ' ' + className : ''}`}>
      {children}
    </div>
  );
};

export default Card;
