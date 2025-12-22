import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products');
  };

  return (
    <>
      <h1>The Home page</h1>
      <p>Go to <Link to="/products">the list of products</Link>.</p>
      <button onClick={handleNavigate}>
        Navigate to products
      </button>
    </>
  );
};

export default Home;
