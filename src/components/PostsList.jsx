import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author='Author 1' body='Post text 1' />
        <Post author='Author 2' body='Post text 2' />
      </ul>
    </>
  );
}

export default PostsList;
