import { Link } from "react-router-dom";

const PRODUCTS_DATA = [
  { id: 'p1', name: 'Product 1' },
  { id: 'p2', name: 'Product 2' },
  { id: 'p3', name: 'Product 3' },
];

const Products = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS_DATA.map(product => (
          <li key={product.id}>
            <Link to={product.id}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
