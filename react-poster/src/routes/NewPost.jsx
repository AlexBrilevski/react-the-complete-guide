import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './NewPost.module.css';

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" rows={3} required />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input id="name" name="author" type="text" required />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
