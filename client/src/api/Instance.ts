import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '',
};

const axiosClient: AxiosInstance = axios.create(config);
axiosClient.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axiosClient.defaults.timeout = 5000; // 2.5 timeout 설정

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
axiosClient.interceptors.response.use(
  (onFulfilled) => {
    return onFulfilled;
  },
  (error) => {
    console.log('error response', error);
    if (401 === error.code) {
    }
    return Promise.reject(error);
  },
);

export default axiosClient;

export async function api(apiConfig: AxiosRequestConfig) {
  return await axiosClient(apiConfig)
    .then((response) => {
      console.log('=========== [INFO] API upload response ==========\n', response);
      if (response.data) {
        if (response.status === 200) {
          return response.data;
        }
        if (response.status !== 200) {
          throw new Error();
        }
      }

      // 401: Unauthorized
      // 403: Forbidden
      // 404: Not Found
    })
    .catch((error) => {
      console.warn(`[WARN] API REST ERROR ===> ${error.toJSON()}`);
      return {
        status: error.response && error.response.status !== 0 ? error.response.status : 9999,
        data: null,
        message: null,
      };
    });
}
