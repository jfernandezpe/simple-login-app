export default class Repository {
  constructor({ url, axios }) {
    this.url = url;
    this.axios = axios;
  }

  get(body = {}) {
    const { params } = body;

    const promise = this.axios.get(this.url, { params });

    return Repository._processPromise(promise);
  }

  post(body = {}) {
    const promise = this.axios.post(this.url, body);

    return Repository._processPromise(promise);
  }

  static _processPromise(promise) {
    return promise.then(Repository._filterResponse).catch(error => error);
  }

  static _filterResponse({ data }) {
    return data;
  }
}
