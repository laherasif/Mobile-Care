import './App.css'
import Checkout from "../pages/Checkout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import GeCommerce from '../pages/GeCommerce';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/geCommerce" element={<GeCommerce />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
