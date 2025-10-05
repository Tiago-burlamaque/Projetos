import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import contexts
import { AuthProvider } from './context/AuthContext';
// import pages
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import NotFound from './pages/Not found/NotFound';
// import Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Main from './layout/Main/Main';


const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      { path: "/", element: <Login />},
      { path: "sobre", element: <Sobre />},
      { path: "Home", element: <Home /> },
      { path: "*", element: <NotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)

