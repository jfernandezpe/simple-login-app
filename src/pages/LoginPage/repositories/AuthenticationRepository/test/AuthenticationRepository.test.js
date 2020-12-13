import { expect } from '@open-wc/testing';

import sinon from 'sinon';
import AuthenticationRepository from '../AuthenticationRepository.js';

describe('AuthenticationRepository', () => {
  let fakeRepository;
  let authenticationRepository;

  beforeEach(() => {
    fakeRepository = {
      get: sinon.stub(),
    };
    authenticationRepository = new AuthenticationRepository(fakeRepository);
  });

  describe('login', () => {
    beforeEach(() => {
      authenticationRepository.login('username', 'password');
    });
    it('should call to the repository', () => {
      expect(fakeRepository.get).to.have.been.called;
    });
    it('should call to the repository with the username and password', () => {
      const expectedParams = {
        body: { username: 'username', password: 'password' },
      };
      expect(fakeRepository.get).to.have.been.calledWith(expectedParams);
    });
  });
});
