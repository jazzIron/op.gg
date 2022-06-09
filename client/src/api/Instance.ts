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
    if (error.code === 401) {
      console.error(`[ERROR] : Unauthorized`);
    }
    if (error.code === 403) {
      console.error(`[ERROR] : Forbidden`);
    }
    if (error.code === 404) {
      console.error(`[ERROR] : Not Found`);
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
    })
    .catch((error) => {
      console.error(`[ERROR] AXIOS API REST ERROR ===> ${error.toJSON()}`);
      return {
        status: error.response && error.response.status !== 0 ? error.response.status : 9999,
      };
    });
}
