import { useState } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(newPost) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      boby: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
      {posts.length > 0 ?
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            const postId = `post-id-${index + Math.random()}`;
            return <Post key={postId} {...post} />
          })}
        </ul>
        :
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      }

    </>
  );
}

export default PostsList;
