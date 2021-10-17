import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './URLModal';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  url: Array<URL> = [];

  constructor(private http: HttpClient) {}

  saveUrl(url: URL) {
    return this.http.post(
      `https://615f09dfaf3659001720479a.mockapi.io/api/urlapi`,
      url
    );
  }

  getAllUrl() {
    return this.http.get<Array<URL>>(
      `https://615f09dfaf3659001720479a.mockapi.io/api/urlapi`
    );
  }

  deleteUrlById(id?: number) {
    return this.http.delete(
      `https://615f09dfaf3659001720479a.mockapi.io/api/urlapi/${id}`
    );
  }

  getUrlById(id?: number) {
    return this.http.get<URL>(
      `https://615f09dfaf3659001720479a.mockapi.io/api/urlapi/${id}`
    );
  }

  updateUrl(url: URL, id?: number) {
    return this.http.put(
      `https://615f09dfaf3659001720479a.mockapi.io/api/urlapi/${id}`,
      url
    );
  }
}
