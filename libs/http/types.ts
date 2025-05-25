export type HTTPWriteRequest = {
  path: string;
  headers?: Record<string, string>;
  query?: Record<string, string>;
  body?: Record<string, string> | FormData;
  baseUrl?: string;
};

export type HTTPReadRequest = Omit<HTTPWriteRequest, 'body'>;

export type HTTPMethods =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';
