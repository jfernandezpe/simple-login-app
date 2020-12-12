import { expect } from '@open-wc/testing';

import sinon from 'sinon';
import Login from '../Authentication.js';

const assertEmptyToken = instance => {
  expect(instance.token).to.be.equal('');
};

describe('Authenticate', () => {
  let fakeRepository;
  let authenticate;
  const username = 'username';
  const password = 'password';
  const fakeToken = 'fakeToken';
  beforeEach(() => {
    fakeRepository = {
      login: sinon.stub().resolves({ token: fakeToken }),
    };
    authenticate = new Login(fakeRepository);
  });

  it('should have a empty token by default', () => {
    assertEmptyToken(authenticate);
  });

  describe('login action', () => {
    it('should perform a login in the repository with the username and password', () => {
      authenticate.login(username, password);

      expect(fakeRepository.login).to.have.been.called;
      expect(fakeRepository.login).to.have.been.calledWith(username, password);
    });
    describe('when the login is successful', () => {
      beforeEach(() => {
        fakeRepository.login.resolves({ token: fakeToken });
      });

      it('should save the token', async () => {
        await authenticate.login(username, password);

        expect(authenticate.token).to.be.equal(fakeToken);
      });
      it('should return the token', async () => {
        const { token } = await authenticate.login(username, password);

        expect(token).to.be.equal(fakeToken);
      });
    });
    describe('when the login fails', () => {
      beforeEach(() => {
        fakeRepository.login.rejects({});
      });

      it('should reject the promise', () => {
        authenticate
          .login(username, password)
          .then(() => {
            throw new Error('expected rejected');
          })
          .catch(() => {
            assertEmptyToken(authenticate);
          });
      });
    });
  });
});
