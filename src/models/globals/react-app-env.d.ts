declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_AUTH_DOMAIN: string;
    REACT_APP_AUTH_CLIENT_ID: string;
  }
}
