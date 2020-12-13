import { httpRepositoryFactory } from '../../../../utils/repository/HttpRepository/index.js';
import { endpoints } from '../../../../config/index.js';
import MyActivityRepository from './MyActivityRepository.js';

export const myActivityRepositoryFactory = () => {
  const repository = httpRepositoryFactory({ url: endpoints.myActivity });
  return new MyActivityRepository(repository);
};
