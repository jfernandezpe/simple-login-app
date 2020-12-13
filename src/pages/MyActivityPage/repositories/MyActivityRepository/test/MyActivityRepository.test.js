import sinon from 'sinon';
import { expect } from '@open-wc/testing';

import MyActivityRepository from '../MyActivityRepository.js';

describe('MyActivityRepository', () => {
  describe('getting my activity', () => {
    describe('when the request is successful', () => {
      let repository;
      const expectedMilisecons = 1607881184144;
      beforeEach(() => {
        const fakeRepository = {
          get: sinon
            .stub()
            .resolves({ lastLogin: new Date('2020-12-13T17:39:44.144Z') }),
        };

        repository = new MyActivityRepository(fakeRepository);
      });
      it('should return the given date as an instance of Date', async () => {
        const { lastLogin } = await repository.getMyActivity();

        expect(lastLogin).to.be.a('Date');
      });
      it('should return the rigth data', async () => {
        const { lastLogin } = await repository.getMyActivity();

        expect(lastLogin.valueOf()).to.be.equal(expectedMilisecons);
      });
    });
    describe('when the request fails', () => {
      it('should reject the promise', done => {
        const fakeRepository = {
          get: sinon.stub().rejects('error'),
        };
        const repository = new MyActivityRepository(fakeRepository);

        repository.getMyActivity().catch(error => {
          expect(error).to.be.an('Error');
          done();
        });
      });
    });
  });
});
