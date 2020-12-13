import { isProduction } from './environment.js';

// TODO: find out another way to set the url
const prefix = isProduction()
  ? 'https://simple-login-app-ee195-default-rtdb.europe-west1.firebasedatabase.app'
  : '/api';

const subfix = isProduction() ? '.json' : '';

export const endpoints = {
  authentication: `${prefix}/authentication${subfix}`,
  myActivity: `${prefix}/my-activity${subfix}`,
};
