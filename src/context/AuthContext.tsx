import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, GetCurrentUserOutput } from 'aws-amplify/auth';

type AuthContextType = {
  user: GetCurrentUserOutput | null;
  isAuthenticated: boolean;
  setUser: (user: GetCurrentUserOutput | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  setUser: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<GetCurrentUserOutput | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('ユーザー情報の取得に失敗しました:', error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
