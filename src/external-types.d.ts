/// <reference types="@wix/yoshi/types" />
/// <reference types="jest-yoshi-preset/types" />
/// <reference types="@wix/wix-bootstrap-renderer/declarations" />

interface Window {
  __LOCALE__: string;
  __BASEURL__: string;
  __MESSAGES__: Messages;
}

// tslint:disable-next-line:no-namespace
declare namespace Express {
  interface Request {
    aspects: any;
  }
}

declare module '@wix/wix-node-i18n-cache';
