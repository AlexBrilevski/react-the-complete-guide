import { use } from 'react';
import CartContex from '../store/CartContext.jsx';
import logo from '../assets/logo.jpg';
import Button from './ui/Button.jsx';
import UserProgressContex from '../store/UserProgressContex.jsx';

export default function Header() {
  const { items } = use(CartContex);
  const { showCart } = use(UserProgressContex);

  const itemsInCart = items.reduce((totalItems, item) => totalItems + item.quantity, 0);

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>React FoodOrder</h1>
        </div>
        <nav>
          <Button textOnly onClick={() => showCart()}>
            Cart ({itemsInCart})
          </Button>
        </nav>
      </header>
    </>
  );
}
