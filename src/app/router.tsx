import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/homePage/HomePage";
import { CartPage } from "../pages/cartPage/CartPage";
import { ProductPage } from "../pages/productPage/productPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
    }
  ]);