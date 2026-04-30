import { use } from 'react';
import CartContex from "../store/CartContext.jsx";
import { currencyFormatter } from "../utils/formatting.js";
import Button from './ui/Button.jsx';

export default function MealItem({ item }) {
  const { image, name, description, price } = item;
  const { addToCart } = use(CartContex);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(price)}
          </p>
          <p className="meal-item-description">
            {description}
          </p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addToCart(item)}>
            Add to cart
          </Button>
        </p>
      </article>
    </li>
  );
}
