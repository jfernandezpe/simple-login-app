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
      .catch(error => {
        this.setDefaultAttributes();
        throw error;
      });
  }
  // Another actions such as recover password or sign ups
}
