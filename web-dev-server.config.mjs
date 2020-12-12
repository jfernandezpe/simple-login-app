// eslint-disable-next-line import/no-extraneous-dependencies
import proxy from 'koa-proxies';
import './mocks/index.mjs';

export default {
  port: 8000,
  middleware: [
    proxy('/api/', {
      target: 'http://localhost:9000/',
    }),
  ],
};
