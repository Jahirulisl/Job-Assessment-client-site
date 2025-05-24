import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
   //for router start
  import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
   //for router end
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
         <RouterProvider router={router} />
        </AuthProvider> 

  </StrictMode>,
)
