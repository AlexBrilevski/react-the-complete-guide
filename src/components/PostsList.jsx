import { useState } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(newPost) {
    setPosts(existingPosts => [newPost, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAddPost={addPostHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author='Author 1' body='Post text 1' />
        <Post author='Author 2' body='Post text 2' />
      </ul>
    </>
  );
}

export default PostsList;
