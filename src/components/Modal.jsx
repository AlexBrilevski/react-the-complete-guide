import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {
  const navigate = useNavigate();

  function handleClose() {
    navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={handleClose} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
