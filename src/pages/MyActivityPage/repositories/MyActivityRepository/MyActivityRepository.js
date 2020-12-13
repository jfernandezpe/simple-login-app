export default class MyActivityRepository {
  constructor(repository) {
    this.repository = repository;
  }

  getMyActivity() {
    return this.repository
      .get()
      .then(data => MyActivityRepository.normalizeMyActivity(data))
      .catch(error => {
        throw error;
      });
  }

  static normalizeMyActivity({ lastLogin }) {
    return {
      lastLogin: new Date(lastLogin),
    };
  }
}
