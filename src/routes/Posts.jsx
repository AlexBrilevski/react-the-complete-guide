import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const responseData = await response.json();
  return responseData.posts;
}

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
