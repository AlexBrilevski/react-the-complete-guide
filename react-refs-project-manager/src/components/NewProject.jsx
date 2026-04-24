import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ handleCancel, handleSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const onSaveClick = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueData = dueDate.current.value;

    if (enteredTitle.trim() === '',
      enteredDescription.trim() === '',
      enteredDueData.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    handleSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueData,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption={'Ok'}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid valur for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className={"text-stone-800 hover:text-stone-950"}
              onClick={handleCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className={"px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"}
              onClick={onSaveClick}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label={'Title'} type={'text'} />
          <Input ref={description} label={'Description'} isTextarea={true} />
          <Input ref={dueDate} label={'Due date'} type={'date'} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
