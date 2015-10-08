/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../N/file.d.ts" />

interface ClientResponse {
  toString: () => string;
  body: string;
  code: number;
  headers: Object;
  method: string;
  parameters: Object;
  url: string;
}

interface ServerRequest {
  getLineCount: (GetLineCountOptions) => number;
  getSublistValue: (GetSublistValueOptions) => string;
  toString: () => string;
  body: string;
  files: Object;
  headers: Object;
  method: string;
  parameters: Object;
  url: string;
}

interface ServerResponse {
  addHeader: (AddHeaderOptions) => void;
  getHeader: (GetHeaderOptions) => string;
  sendRedirect: (SendRedirectOptions) => void;
  setHeader: (SetHeaderOptions) => void;
  renderPdf: (RenderPDFOptions) => void;
  setCdnCacheable: (SetCDNCacheableOptions) => void;
  write: (WriteOptions) => void;
  writeFile: (WriteFileOptions) => void;
  writeLine: (WriteLineOptions) => void;
  writePage: (WritePageOptions) => void;
  headers: Object;
}

interface AddHeaderOptions {
  name: string; // The name of the header.
  value: string; // The value used to set the header.
}

interface GetHeaderOptions {
  name: string;
}

interface SendRedirectOptions {
  type: string;
  identifier: string;
  id?: string;
  editmode?: boolean;
  parameters?: Object; // Additional URL parameters as name/value pairs
}

interface SetHeaderOptions {
  name: string; // The name of the header.
  value: string; // The value used to set the header.
}

interface RenderPDFOptions {
  xmlString: string; // Content of the pdf.
}

interface SetCDNCacheableOptions {
  type: string; // The value of the caching duration. Set using the http.CacheDuration enum.
}

interface WriteOptions {
  output: string; // The output string or file being written.
}

interface WriteFileOptions {
  file: NSFile; // The file to be written
  isInline?: boolean; // Determines whether the field is inline. If true, the file is inline.
}

interface WriteLineOptions {
  output: string; // The output string being written.
}

interface WritePageOptions {
  pageobject: Object;
}

interface GetLineCountOptions {
  group: string;
}

interface GetSublistValueOptions {
  group: string;
  name: string;
  line: string;
}

interface GetOptions {
  url: string;
  headers?: Object;
}

interface DeleteOptions {
  url: string;
  headers?: Object;
}

interface RequestOptions {
  method: HttpMethod;
  url: string;
  body?: string|Object;
  headers?: Object;
}

interface PostOptions {
  url: string;
  body: string|Object;
  headers?: Object;
}

interface PutOptions {
  url: string;
  body: string|Object;
  headers?: Object;
}

interface CacheDuration {
  LONG: string;
  MEDIUM: string;
  SHORT: string;
  UNIQUE: string;
}

interface HttpMethod {
  DELETE: string;
  GET: string;
  PUT: string;
  POST: string;
}

interface HttpModule {
  get: (GetOptions) => ClientResponse;
  delete: (DeleteOptions) => ClientResponse;
  request: (RequestOptions) => ClientResponse;
  post: (PostOptions) => ClientResponse;
  put: (PutOptions) => ClientResponse;
}

declare module N {
  var http: HttpModule;
}

declare module 'N/http' {
  export = N.http;
}
