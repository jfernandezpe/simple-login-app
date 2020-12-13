import { axios } from '@bundled-es-modules/axios';

const instance = axios.create();

export const getAxiosInstance = () => instance;

export const configToken = (headerName, getToken) => {
  instance.interceptors.request.use(config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.common[headerName] = getToken();
    return config;
  });
};
