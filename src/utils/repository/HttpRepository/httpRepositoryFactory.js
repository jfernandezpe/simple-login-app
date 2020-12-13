import HttpRepository from './HttpRepository.js';
import { getAxiosInstance } from './httpRepositoryConfigSingelton.js';

export const httpRepositoryFactory = ({ url }) => {
  const axios = getAxiosInstance();
  return new HttpRepository({ url, axios });
};
