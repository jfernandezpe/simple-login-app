import { HttpRepository } from '../../../../utils/repository/index.js';
import { endpoints } from '../../../../config/index.js';
import SesssionRepository from './AuthenticationRepository.js';

export const authenticationRepositoryFactory = () => {
  const repository = new HttpRepository({ url: endpoints.authentication });
  return new SesssionRepository(repository);
};
