export default class AuthenticationRepository {
  constructor(repository) {
    this.repository = repository;
  }

  login(username, password) {
    const body = { username, password };
    return this.repository.post({ body });
  }
}
