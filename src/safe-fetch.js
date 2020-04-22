import authFetch from './auth-fetch';
import store from './store';

// 请求头带上 Token
// Token 过期或登陆判断的封装 fetch
export default (url, options = {}) =>
  authFetch(url, options).then(res => {
    if (res.code === 401) {
      store.dispatch('LogOut').then(() => {
        window.location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    }
    return res;
  });
