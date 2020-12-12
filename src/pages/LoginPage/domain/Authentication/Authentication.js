export default class Authentication {
  constructor(repository) {
    this.repository = repository;
    this.setDefaultAttributes();
  }

  setDefaultAttributes() {
    this.token = '';
  }

  login(username, password) {
    return this.repository
      .login(username, password)
      .then(({ token }) => {
        this.token = token;
        return { token };
      })
      .catch(() => {
        this.setDefaultAttributes();
      });
  }
  // Another actions such as recover password or sign ups
}
