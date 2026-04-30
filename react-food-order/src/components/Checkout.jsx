import { useContext, useActionState } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import CartContex from "../store/CartContext";
import UserProgressContex from "../store/UserProgressContex";
import { currencyFormatter } from "../utils/formatting";
import Input from "./ui/Input";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContex);
  const { progress, hideCheckout } = useContext(UserProgressContex);
  const {
    data,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig);

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  async function checkoutAction(prevState, formData) {
    const fieldValues = Object.fromEntries(formData.entries());

    await sendRequest(JSON.stringify({ order: { customer: fieldValues, items } }));
  }

  function onCloseOrderConfirmation() {
    hideCheckout();
    clearData();
    clearCart();
  }

  const [formState, formAction, isLoading] = useActionState(checkoutAction, null);

  let actions = (
    <>
      <Button onClick={hideCheckout} type="buton" textOnly>
        Close
      </Button>
      <Button>
        Submit Order
      </Button>
    </>
  );

  if (isLoading) {
    actions = <span>Processing order...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === 'checkout'} onClose={onCloseOrderConfirmation}>
        <h2>Thank you!</h2>
        <p>Your order has been submitted successfully.</p>
        <p>We'll get back to you with more details via email within next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={onCloseOrderConfirmation}>
            Ok
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === 'checkout'} onClose={hideCheckout}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input id="name" label="Full Name" type="text" required />
        <Input id="email" label="E-mail Address" type="email" required />
        <Input id="street" label="Street" type="text" required />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" required />
          <Input id="city" label="City" type="text" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">
          {actions}
        </p>
      </form>
    </Modal>
  );
}
