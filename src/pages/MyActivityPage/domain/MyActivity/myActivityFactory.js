import MyActivity from './MyActivity.js';
import { myActivityRepositoryFactory } from '../../repositories/MyActivityRepository/myActivityRepositoryFactory.js';

export const myActivityFactory = () => {
  const repository = myActivityRepositoryFactory();
  return new MyActivity(repository);
};
