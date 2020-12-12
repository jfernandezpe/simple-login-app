import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';

import '../../login-page.js';

describe('LoginPage', () => {
  let element;
  let child;
  beforeEach(async () => {
    element = await fixture(html` <login-page></login-page> `);
    await nextFrame();
    child = element.shadowRoot.querySelector('.ui-component');
  });

  it('should pass  the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('when receive a "login-ui-submit" event', () => {
    const username = 'username';
    const password = 'password';
    const fakeToken = 'someFakeToken';

    it('should login in the domain', () => {
      sinon
        .stub(element.authentication, 'login')
        .resolves({ token: fakeToken });

      child.dispatchLoginEvent({ username, password });

      expect(element.authentication.login).to.have.been.calledOnce;
      expect(element.authentication.login).to.have.been.calledWith(
        username,
        password
      );
    });
    describe('when the login is successfull', () => {
      let eventStub;
      beforeEach(() => {
        eventStub = sinon.stub();
        element.addEventListener('authentication-success', eventStub);
        sinon
          .stub(element.authentication, 'login')
          .resolves({ token: fakeToken });
      });
      it('should inform to the app with the event "authentication-success"', async () => {
        const expectedPayload = { detail: { token: fakeToken } };

        child.dispatchLoginEvent({ username, password });
        await nextFrame();

        expect(eventStub).have.been.called;
        expect(eventStub).have.been.calledWithMatch(expectedPayload);
      });
    });
    describe('when the login fails', () => {
      it('should inform of the error to the UI', async () => {
        sinon.stub(element.authentication, 'login').rejects({});

        child.dispatchLoginEvent({ username, password });
        await nextFrame();

        expect(child.loginError).to.be.true;
      });
    });
  });
});
