import { UserProgressContexProvider } from "./store/UserProgressContex.jsx";
import { CartContexProvider } from "./store/CartContext.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserProgressContexProvider>
      <CartContexProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContexProvider>
    </UserProgressContexProvider>
  );
}

export default App;
