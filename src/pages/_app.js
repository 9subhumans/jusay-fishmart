import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

// component styles
import '@/styles/components/NavigationBar.scss';

// page styles
import '@/styles/pages/products.css';

// contexts
import { CartProvider } from '@/contexts/CartContext';
import { ToastProvider } from '@/contexts/ToastContext';

import ProductForm from './products';


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </CartProvider>
  )
}
