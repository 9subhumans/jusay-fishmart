import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const isLoggedIn = () => {
  try {
    const token = Cookies.get('token');
    console.log(token);
    const decoded = jwt.verify(token, 'qwe123!@#');

    if (!decoded) {
      return {};
    }

    return decoded;
  } catch (error) {
    console.log(error);
    return {};
  }
}