import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('Author 1');
  const [enteredAuthor, setEnteredAuthor] = useState('Post text 1');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onChangeBody={changeBodyHandler}
        onChangeAuthor={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Author 2' body='Post text 2' />
      </ul>
    </>
  );
}

export default PostsList;
