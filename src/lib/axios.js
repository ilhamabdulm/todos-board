import axios from 'axios';

const BASE_URL = (target) =>
  `${process.env.REACT_APP_API_URL}/api/v1/${target}`;

const request = axios.create();

request.interceptors.request.use(
  async (config) => {
    config.headers = {
      authorization: `Bearer <token>`,
      'Content-Type': 'application/json',
      ...config.headers,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchApi = (url, method, param1 = null, param2) => {
  return new Promise((resolve, reject) => {
    request[method](`${BASE_URL(url)}`, param1, param2)
      .then((response) => resolve(response.data))
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        console.log(err);
        if (!err.response || !err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export default request;
