const PostPage = ({ params }) => {
  return (
    <main>
      <h1>Post page</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default PostPage;
