import Authentication from './Authentication.js';
import { authenticationRepositoryFactory } from '../../repositories/AuthenticationRepository/authenticationRepositoryFactory.js';

export const authenticationFactory = () => {
  const repository = authenticationRepositoryFactory();
  return new Authentication(repository);
};
