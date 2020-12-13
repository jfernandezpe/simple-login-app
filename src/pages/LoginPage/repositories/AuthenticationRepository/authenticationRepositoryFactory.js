import { httpRepositoryFactory } from '../../../../utils/repository/HttpRepository/index.js';
import { endpoints } from '../../../../config/index.js';
import SesssionRepository from './AuthenticationRepository.js';

export const authenticationRepositoryFactory = () => {
  const repository = httpRepositoryFactory({ url: endpoints.authentication });
  return new SesssionRepository(repository);
};
