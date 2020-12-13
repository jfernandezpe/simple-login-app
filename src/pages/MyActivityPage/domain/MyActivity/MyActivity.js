import { differenceUntilNow } from '../../../../utils/dates/index.js';

export default class Authentication {
  constructor(repository) {
    this.repository = repository;
    this.setDefaultAttributes();
  }

  setDefaultAttributes() {
    this.loginSince = 0;
  }

  getLoginSince() {
    return this.repository
      .getMyActivity()
      .then(({ lastLogin }) => {
        this.loginSince = differenceUntilNow(lastLogin.valueOf());
        return { loginSince: this.loginSince };
      })
      .catch(() => {
        this.setDefaultAttributes();
        return { loginSince: this.loginSince };
      });
  }
}
