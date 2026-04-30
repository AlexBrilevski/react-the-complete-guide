import { useContext } from "react";
import CartContex from "../store/CartContext";
import UserProgressContex from "../store/UserProgressContex";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { currencyFormatter } from "../utils/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, updateItemQuantity, removeItem } = useContext(CartContex);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContex);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Modal
      open={progress === 'cart'}
      className="cart"
      onClose={progress === 'cart' ? hideCart : null}
    >
      <h2>Your cart</h2>
      {items.length > 0 ?
        <>
          <ul>
            {items.map(item => (
              <CartItem
                key={item.id}
                {...item}
                onDecrease={() => updateItemQuantity('decrease', item.id)}
                onIncrease={() => updateItemQuantity('increase', item.id)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </ul>
          <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
        </>
        :
        <p>No items in the cart</p>
      }
      <div className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>
            Go to Checkout
          </Button>
        )}
      </div>
    </Modal>
  );
}
