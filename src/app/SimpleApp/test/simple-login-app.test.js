import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';
import { getAxiosInstance } from '../../../utils/repository/HttpRepository/index.js';
import SimpleLoginApp from '../SimpleLoginApp.js';
import '../simple-login-app.js';
import { getToken } from '../session/index.js';

describe('SimpleLoginApp', () => {
  let element;

  const token = 'some-token';

  const actionDispatchEvent = (el, eventName) => {
    el.dispatchEvent(
      new CustomEvent(eventName, {
        detail: { token },
        bubbles: true,
        composed: true,
      })
    );
  };

  beforeEach(async () => {
    element = await fixture(html` <simple-login-app></simple-login-app> `);
    await nextFrame();
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('when receive "authentication-success" event', () => {
    let axiosInstance;
    beforeEach(() => {
      axiosInstance = getAxiosInstance();
      sinon.stub(axiosInstance.interceptors.request, 'use');
      sinon.stub(SimpleLoginApp, 'navigate');
    });
    afterEach(() => {
      axiosInstance.interceptors.request.use.restore();
      SimpleLoginApp.navigate.restore();
    });
    it('should set the token in the session', () => {
      actionDispatchEvent(element, 'authentication-success');

      expect(getToken()).to.be.equal(token);
    });
    // TODO: improve this test
    it('should configure the HttpRepository with the given token', () => {
      actionDispatchEvent(element, 'authentication-success');

      expect(axiosInstance.interceptors.request.use).to.have.been.called;
    });
    it('should navigate to my activities', () => {
      actionDispatchEvent(element, 'authentication-success');

      expect(SimpleLoginApp.navigate).to.have.been.called;
      expect(SimpleLoginApp.navigate).to.have.been.calledWith('my-activity');
    });
  });
  describe('when receive "authentication-logout" event', () => {
    let axiosInstance;
    beforeEach(() => {
      axiosInstance = getAxiosInstance();
      sinon.stub(axiosInstance.interceptors.request, 'use');
      sinon.stub(SimpleLoginApp, 'navigate');
    });
    afterEach(() => {
      axiosInstance.interceptors.request.use.restore();
      SimpleLoginApp.navigate.restore();
    });
    it('should navigate to my activities', () => {
      actionDispatchEvent(element, 'authentication-logout');

      expect(SimpleLoginApp.navigate).to.have.been.called;
      expect(SimpleLoginApp.navigate).to.have.been.calledWith('');
    });
  });
});
