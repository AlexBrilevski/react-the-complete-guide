import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
