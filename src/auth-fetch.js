import { authData } from './auth';

// 请求头带上 Token
// Token 过期或登陆判断的封装 fetch
export default (url, params = {}) => {
  const options = { ...params };

  if (!options.headers) options.headers = {};
  if (authData.tokenHeader && authData.tokenHead && authData.token)
    options.headers[
      authData.tokenHeader
    ] = `${authData.tokenHead} ${authData.token}`;

  return window.fetch(url, options).then(res => res.json());
};
