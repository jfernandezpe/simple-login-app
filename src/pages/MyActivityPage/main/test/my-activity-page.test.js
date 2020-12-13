import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';

import '../../my-activity-page.js';
import MyActivity from '../../domain/MyActivity/MyActivity.js';

describe('my-activity-page', () => {
  let element;
  const expectedLoginSince = 42324;
  beforeEach(async () => {
    sinon
      .stub(MyActivity.prototype, 'getLoginSince')
      .resolves({ loginSince: expectedLoginSince });
    element = await fixture(html` <my-activity-page></my-activity-page> `);
    await nextFrame;
  });
  afterEach(() => {
    MyActivity.prototype.getLoginSince.restore();
  });
  it('should pass  the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
  describe('when is connected in the DOM', () => {
    it('should set loginSice attribute with the value from the domain', () => {
      expect(element.loginSince).to.be.equal(expectedLoginSince);
    });
    it('should inform to the UI the loginSince value', async () => {
      await nextFrame();
      const { loginSince } = element.shadowRoot.querySelector('.ui-component');

      expect(loginSince).to.be.equal(expectedLoginSince);
    });
  });
});
