import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  private Url(requestParameter: Partial<RequestParameters>): string {
    return `${
      requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl
    }/${requestParameter.controller}${
      requestParameter.action ? `/${requestParameter.action}` : ''
    }`;
  }

  get<T>(requestParameter: Partial<RequestParameters>, id?: string) {
    let url: string = '';
    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else url = `${this.Url(requestParameter)}${id ? `/${id}` : ''}`;

    // this.httpClient.get(,);
  }

  post() {}

  put() {}

  delete() {}
}

export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
