import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router.tsx'
import './app/styles/index.scss'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <ToastContainer/>
        <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>,
)
