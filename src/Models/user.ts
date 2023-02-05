export type UserData = {
  email: string;
  _id: string;
};

export type User = {
  isLogged?: boolean;
  isLoaded?: boolean;
  user?: UserData;
};
