const tokenHeaderKey = 'tokenHeader';
const tokenHeadKey = 'tokenHead';
const tokenKey = 'token';

export const authData = {
  tokenHeader: window.localStorage.getItem(tokenHeaderKey) || '',
  tokenHead: window.localStorage.getItem(tokenHeadKey) || '',
  token: window.localStorage.getItem(tokenKey) || '',
};

export const storeToken = ({ tokenHeader, tokenHead, token }) => {
  authData.tokenHeader = tokenHeader;
  authData.tokenHead = tokenHead;
  authData.token = token;
  window.localStorage.setItem(tokenHeaderKey, tokenHeader);
  window.localStorage.setItem(tokenHeadKey, tokenHead);
  window.localStorage.setItem(tokenKey, token);
};

export const removeToken = () => {
  authData.tokenHeader = '';
  authData.tokenHead = '';
  authData.token = '';
  window.localStorage.removeItem(tokenHeaderKey);
  window.localStorage.removeItem(tokenHeadKey);
  window.localStorage.removeItem(tokenKey);
};
