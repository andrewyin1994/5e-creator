import config from '../config';

const AuthAPIService = {
  postLogin: async function (cred) {
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cred)
    });

    return (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json();
  },
  postUser: async function (user) {
    const res = await fetch(`${config.API_ENDPOINT}/users`,  {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    return (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json();
  }
};

export default AuthAPIService;