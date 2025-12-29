import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import Snowfall from 'react-snowfall'
import AuthContext from './context/AuthContext.jsx'
import CartContext, { CartData } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <CartContext>
      <App /><Toaster />
    </CartContext>
  </AuthContext>

)
