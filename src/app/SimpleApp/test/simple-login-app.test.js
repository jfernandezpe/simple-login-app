import { html, fixture, expect } from '@open-wc/testing';

import '../simple-login-app.js';

describe('SimpleLoginApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <simple-login-app></simple-login-app> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
