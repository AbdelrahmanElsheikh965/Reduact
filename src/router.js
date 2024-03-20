import { Outlet, createBrowserRouter } from "react-router-dom";
import Product from "./components/oneproduct";
import Products from "./components/Products";
import NavBar from "./components/nav";
import Register from "./components/Register";
import NotFound from "./components/notfound";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

function WithoutLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Products />,
        path: "/",
      },
      {
        element: <Product />,
        path: "/products/:id"
      },
    ]
  },
  {
    element: <WithoutLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Register />,
        path: "/register"
      },
    ]
  }
])

export default router;