import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>The Home page</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
    </>
  );
};

export default Home;
