import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from './components/Home/Home';
import Shop from "./components/Shop/Shop";
import AdminAddProduct from './components/Admid/AdminAddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/admin",
    element: <AdminAddProduct />
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
