import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// component styles
import '@/styles/components/NavigationBar.scss';

// page styles
import '@/styles/pages/products.css';

import ProductForm from './products';

export default function App({ Component, pageProps }) {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);
  console.log(process.env.DB_PORT);
  console.log(process.env.DB_NAME);
  return <Component {...pageProps} />
}
