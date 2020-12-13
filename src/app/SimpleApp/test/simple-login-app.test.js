import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';
import { getAxiosInstance } from '../../../utils/repository/HttpRepository/index.js';
import SimpleLoginApp from '../SimpleLoginApp.js';
import '../simple-login-app.js';

describe('SimpleLoginApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <simple-login-app></simple-login-app> `);
    await nextFrame();
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('when receive "authentication-success" event', () => {
    const token = 'some-token';

    const actDispatchEvent = el => {
      el.dispatchEvent(
        new CustomEvent('authentication-success', {
          detail: { token },
          bubbles: true,
          composed: true,
        })
      );
    };
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
    it('should configure the HttpRepository with the given token', () => {
      actDispatchEvent(element);

      expect(axiosInstance.interceptors.request.use).to.have.been.called;
    });
    it('should navigate to my activities', () => {
      actDispatchEvent(element);

      expect(SimpleLoginApp.navigate).to.have.been.called;
      expect(SimpleLoginApp.navigate).to.have.been.calledWith('my-activity');
    });
  });
});
