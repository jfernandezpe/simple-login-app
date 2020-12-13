import sinon from 'sinon';
import { expect } from '@open-wc/testing';
import MyActivity from '../MyActivity.js';

describe('MyActiviy', () => {
  describe('retrieving since when the use is connected', () => {
    describe('when the request is successful', () => {
      let myActivity;
      let clock;
      const dayInMiliseconds = 86400000;
      beforeEach(() => {
        const fakeTime = 1607881184144; // 2020-12-13T17:39:44.144Z;
        const fakeTimeyesterday = new Date('2020-12-12T17:39:44.144Z');
        clock = sinon.useFakeTimers(fakeTime);

        const fakeRepository = {
          getMyActivity: sinon.stub().resolves({
            lastLogin: fakeTimeyesterday,
          }),
        };
        myActivity = new MyActivity(fakeRepository);
      });

      afterEach(() => {
        clock.restore();
      });

      it('should resolve the diference between the last login and now', async () => {
        const { loginSince } = await myActivity.getLoginSince();

        expect(loginSince).to.be.equal(dayInMiliseconds);
      });
      it('should save the calculate diference between the last login and now', async () => {
        await myActivity.getLoginSince();

        expect(myActivity.loginSince).to.be.equal(dayInMiliseconds);
      });
    });
    describe('when the request fails', () => {
      let myActivity;
      beforeEach(() => {
        const fakeRepository = {
          getMyActivity: sinon.stub().rejects('error'),
        };
        myActivity = new MyActivity(fakeRepository);
      });

      it('should resolves loginSince as 0 miliseconds', async () => {
        const { loginSince } = await myActivity.getLoginSince();

        expect(loginSince).to.be.equal(0);
      });
      it('should save 0 as the last login and now', async () => {
        myActivity.loginSince = 3000;

        await myActivity.getLoginSince();

        expect(myActivity.loginSince).to.be.equal(0);
      });
    });
  });
});
