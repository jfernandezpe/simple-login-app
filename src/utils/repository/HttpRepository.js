import { axios } from '@bundled-es-modules/axios';

export default class Repository {
  constructor({ url }) {
    this.url = url;
  }

  get(body = {}) {
    const { params } = body;

    const promise = axios.get(this.url, { params });

    return Repository._processPromise(promise);
  }

  post(body = {}) {
    const promise = axios.post(this.url, body);

    return Repository._processPromise(promise);
  }

  static _processPromise(promise) {
    return promise.then(Repository._filterResponse).catch(error => error);
  }

  static _filterResponse({ data }) {
    return data;
  }
}
