import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';
import '../my-activity-ui.js';

describe('MyActivityUI', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <my-activity-ui></my-activity-ui> `);
    await nextFrame;
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
  });

  it('should pass  the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
  describe('when the logout button is clicked', () => {
    it('should dispatch the event "my-activity-ui-logout"', () => {
      const eventStub = sinon.stub();
      element.addEventListener('my-activity-ui-logout', eventStub);
      const logoutButton = element.shadowRoot.querySelector('.logout-button');

      logoutButton.click();

      expect(eventStub).to.have.been.called;
    });
  });
});
