import { authData, storeToken, removeToken } from './auth';
import safeFetch from './safe-fetch';
import store from './store';

export default cb => {
  if (!authData.token) {
    cb();
    return;
  }

  // refresh token
  safeFetch('/admin/account/refreshToken').then(res => {
    if (res.code < 300) {
      storeToken(res.data);
      cb();
    } else {
      removeToken();
      store.dispatch('LogOut').then(() => {
        window.location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    }
  });
};
