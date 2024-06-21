import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/homePage/HomePage";
import { CartPage } from "../pages/cartPage/CartPage";
import { ProductPage } from "../pages/productPage/productPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PrivateRoute } from "./PrivateRouter";


export const router = createBrowserRouter([
    {
      path: '/',
        element: <PrivateRoute><Layout/></PrivateRoute>,
        children: [{
          index: true,
            element: <HomePage />,
          }, 
          { path: 'cart',
            element: <CartPage/>
          }, 
          { path: 'product/:productId',
            element: <ProductPage/>
          }, 
          { path: '*',
            element: <NotFoundPage/>
          }
        ]
      },
      {
        path: '/login',
        element: <LoginPage/>},
      ]
      // element: <Layout />,
      // children: [{
      //   index: true,
      //   element: <HomePage />,
      // }, 
      // { path: 'cart',
      //   element: <CartPage/>
      // }, 
      // { path: 'product/:productId',
      //   element: <ProductPage/>
      // }, 
      // {
      //   path: '/login',
      //   element: <LoginPage/>},
      // { path: '*',
      //   element: <NotFoundPage/>
      // }
      // ]},
     
  );