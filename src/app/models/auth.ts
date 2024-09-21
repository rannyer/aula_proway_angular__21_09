export interface User {
  email: string;
  password: string;
}

export interface AccessToken {
  accessToken: string;
  user: {
    email: string;
    id: string;
  };
}
export interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}
