import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {
    // console.log("cookie")
    Cookies.set('jwt', token);
};

export const removeTokenCookie = () => {
  // Remove the token cookie
  Cookies.remove('jwt');
};
