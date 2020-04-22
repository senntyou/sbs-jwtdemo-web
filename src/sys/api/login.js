import authFetch from '../../auth-fetch';

export function loginByUsername(username, password) {
  const urlSearchParams = new FormData();
  urlSearchParams.append('username', username);
  urlSearchParams.append('password', password);

  return fetch('/admin/account/login', {
    method: 'post',
    body: urlSearchParams
  }).then(res => res.json()).then(res => {
    if (res.data) {
      res.data.roles = [];
    }
    return res;
  });
}

export function logout() {
  return authFetch('/admin/account/refreshToken');
}

export function getUserInfo() {
  return authFetch('/admin/account/currentUser').then(res => {
    if (res.data) {
      res.data.roles = ['admin'];
    }
    return res;
  });
}

window.authFetch = authFetch;
