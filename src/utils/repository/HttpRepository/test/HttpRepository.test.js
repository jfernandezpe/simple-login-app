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

  describe('when the request is ok', () => {
    it('should resolves the API values when is GET', async () => {
      const data = await repository.get();

      expect(data).to.be.deep.equal(fakeGetData());
    });
    it('should resolves the API when is POST', async () => {
      const data = await repository.post();

      expect(data).to.be.deep.equal(fakePostData());
    });
  });
  describe('when the request fails', () => {
    it('should reject  when is GET', done => {
      repository
        .get()
        .then(() => {
          throw new Error('The request should fail');
        })
        .catch(e => {
          expect(e).to.be.an('Error');
          done();
        });
    });
    it('should reject when is POST', done => {
      repository
        .post()
        .then(() => {
          throw new Error('The request should fail');
        })
        .catch(e => {
          expect(e).to.be.an('Error');
          done();
        });
    });
  });
});
