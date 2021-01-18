import JwtDecode from 'jwt-decode';
import api from '../services/api';

export const isAuthenticated = () => {
  if (sessionStorage.getItem('token') !== null) {
    const token = sessionStorage.getItem('token');
    try {
      const decode = JwtDecode(token);

      if (decode.exp * 1000 > Date.now()) {
        sessionStorage.setItem('token', token);
        api.defaults.headers.Authorization = `Bearer ${token}`;

        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err)
      return false
    }
  } else {
    return false
  }
};

export const getUser = () => {
  if (sessionStorage.getItem('token') !== null) {
    const token = sessionStorage.getItem('token');
    console.log('token', token)
    try {
      const user = JwtDecode(token);

      return user
    } catch (err) {
      console.log(err)
      return false
    }
  } else {
    return false
  }
}


export const login = (email, password) => new Promise((resolve, reject) => {

  if (!email || !password) {
    reject("Por favor, preencha email e senha");
  } else {
    try {
      api.post("auth/login", { email, password }).then((res) => {
        const { token } = res.data;

        sessionStorage.setItem('token', token);
         api.defaults.headers.Authorization = `Bearer ${token}`;

        resolve();
      }).catch((err) => {
        const { data } = err.response;
        if (data.status === 500) {
          return reject(data.errors.mensagem);
        }
        return reject('Servidor respondeu com status 500. Por favaor tente novamente mais tarde');

      })
    } catch (error) {
      reject("Ocorreu um erro interno. Por favaor tente novamente mais tarde");
    }
  }
});

export const register = (username, email, password) => new Promise((resolve, reject) => {

  try {
    api.post("/auth/register", { username, email, password }).then((res) => {
      const { token } = res.data;

      sessionStorage.setItem('token', token);
       api.defaults.headers.Authorization = `Bearer ${token}`;

      return resolve();

    }).catch((err) => {
      const { data } = err.response;
      if (data.status === 401) {
        return reject(data.errors.message);
      }
      return reject('Servidor respondeu com status 500. Por favaor tente novamente mais tarde');

    })
  } catch (error) {
    reject("Ocorreu um erro interno. Por favaor tente novamente mais tarde");
  }
});
