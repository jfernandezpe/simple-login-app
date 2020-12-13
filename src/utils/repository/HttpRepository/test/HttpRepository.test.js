import { expect } from '@open-wc/testing';
import sinon from 'sinon';

import { httpRepositoryFactory } from '../httpRepositoryFactory.js';

const fakeGetData = () => ({
  data: {
    user: 'Maria',
    lastLogin: 'yesterday',
  },
});

const fakePostData = () => ({
  status: 'successful',
});

describe('Repository', () => {
  let repository;
  let fakeServer;
  before(() => {
    fakeServer = sinon.createFakeServer();
    fakeServer.respondImmediately = true;

    fakeServer.respondWith('GET', '/some/fake-endpoint', [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(fakeGetData()),
    ]);
    fakeServer.respondWith('POST', '/some/fake-endpoint', [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(fakePostData()),
    ]);
  });

  beforeEach(() => {
    repository = httpRepositoryFactory({ url: '/some/fake-endpoint' });
  });

  describe('when performs a get', () => {
    it('should resolves the API values when the request was ok', async () => {
      const data = await repository.get();

      expect(data).to.be.deep.equal(fakeGetData());
    });
  });
  describe('when performs a post', () => {
    it('should resolves the API values when the request was ok', async () => {
      const data = await repository.post();

      expect(data).to.be.deep.equal(fakePostData());
    });
  });
});