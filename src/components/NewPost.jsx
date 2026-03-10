import classes from './NewPost.module.css';

function NewPost({ onChangeBody, onChangeAuthor, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          rows={3}
          required
          onChange={onChangeBody}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          required
          onChange={onChangeAuthor}
        />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>
          Submit
        </button>
      </p>
    </form>
  );
}

export default NewPost;
