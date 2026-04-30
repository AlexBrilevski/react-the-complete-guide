import { currencyFormatter } from "../utils/formatting";

export default function CartItem({ name, price, quantity, onDecrease, onIncrease, onRemove }) {
  return (
    <li className="cart-item">
      <p>{name} - {currencyFormatter.format(price)} x {quantity}</p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
        <button onClick={onRemove}>X</button>
      </p>
    </li>
  );
}
