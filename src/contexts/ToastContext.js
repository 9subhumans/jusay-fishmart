import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TOAST_SETTINGS = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const ToastContext = createContext({
  show: () => {}
});

export const ToastProvider = ({ children }) => {
  const show = (message, variant = 'success') => {
    toast[variant](message, TOAST_SETTINGS);
  }

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </ToastContext.Provider>
  )
}