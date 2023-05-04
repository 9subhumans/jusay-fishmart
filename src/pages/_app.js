import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import '@/styles/fonts.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

// component styles
import '@/styles/components/NavigationBar.scss';
import '@/styles/components/ProductCard.scss';
import '@/styles/components/FilterBar.scss';
import '@/styles/components/SortBar.scss';
import '@/styles/components/Featured.scss';
import '@/styles/components/Footer.scss';

// page styles
import '@/styles/pages/products.css';

// contexts
import { CartProvider } from '@/contexts/CartContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { AuthContext, AuthProvider } from '@/contexts/AuthContext';

import ProductForm from './products';


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ToastProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ToastProvider>
    </CartProvider>
  )
}
