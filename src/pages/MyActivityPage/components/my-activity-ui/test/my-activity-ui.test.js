import { html, fixture, expect, nextFrame } from '@open-wc/testing';

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
});
