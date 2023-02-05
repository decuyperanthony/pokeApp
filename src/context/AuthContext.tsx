/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

import fetcher from '../service/config';
import { UserData, User } from '../Models/user';
import { SIGNIN_TOKEN_URL } from '../service/endPoint';

export type AuthResponse = {
  ok: boolean;
  user: UserData;
  token: string;
};

type AuthContextType = {
  setUser: (user: User) => void;
  user: User;
};
const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = (): AuthContextType => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    fetcher(SIGNIN_TOKEN_URL).then((res) =>
      setUser({ isLogged: res.ok, user: res.user, isLoaded: true })
    );
  }, []);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
