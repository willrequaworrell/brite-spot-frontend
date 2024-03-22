import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {
    Cookies.set('jwt', token);
};

export const removeTokenCookie = () => {
  Cookies.remove('jwt');
};
