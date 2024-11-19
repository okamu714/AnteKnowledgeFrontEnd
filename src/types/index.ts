
// User型定義
export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

//Amplifyの認証機能用の型
export interface AuthWrapperProps {
  signOut?: () => void; // オプショナル
  user?: {
    username: string;
  };
  children?: React.ReactNode;
}