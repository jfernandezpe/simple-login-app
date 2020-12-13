import { html, fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';

import '../login-page-ui.js';

describe('LoginPageUI', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <login-page-ui></login-page-ui> `);
    await nextFrame;
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
  });

  it('should pass  the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('when the button is clicked', () => {
    let form;
    let loginButton;
    let eventStub;
    beforeEach(() => {
      form = element.shadowRoot.querySelector('.login-form');
      loginButton = form.querySelector('.form-submit');

      eventStub = sinon.stub();
      element.addEventListener('login-ui-submit', eventStub);
    });
    it('should validate the inputs', () => {
      const firstInput = form.querySelector('.form-field');

      sinon.spy(firstInput, 'reportValidity');

      loginButton.click();

      expect(firstInput.reportValidity).to.have.been.called;
    });
    describe('and the form has not been filled', () => {
      it('should not dispatch the event "login-ui-submit"', () => {
        loginButton.click();

        expect(eventStub).to.have.been.not.called;
      });
    });
    describe('and the form has been filled', () => {
      beforeEach(async () => {
        const inputs = form.querySelectorAll('.form-field');
        inputs[0].value = 'username';
        inputs[1].value = 'password';

        await nextFrame();
      });
      it('should dispatch the event "login-ui-submit"', () => {
        loginButton.click();

        expect(eventStub).to.have.been.calledOnce;
      });
      it('should dispatch the event "login-ui-submit" with the username and password', () => {
        const expectedValue = {
          detail: { username: 'username', password: 'password' },
        };

        loginButton.click();

        expect(eventStub).to.have.been.calledWithMatch(expectedValue);
      });
    });
    describe('when there is a login error', () => {
      it('should display a error', async () => {
        element = await fixture(
          html` <login-page-ui loginError></login-page-ui> `
        );
        await nextFrame();

        const errorMessage = element.shadowRoot.querySelector('.login-error');
        expect(errorMessage).to.be.not.null;
      });
      it('should display a error', () => {
        const errorMessage = element.shadowRoot.querySelector('.login-error');
        expect(errorMessage).to.be.null;
      });
    });
  });
});
