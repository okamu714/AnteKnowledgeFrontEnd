// User型定義
export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

// 電子記事の型定義
export type Book = {
  id: string;
  title: string;
  thumbnail?: { url: string }; // サムネイルはオプション
  content: string;
  price: number;
  createAt: string;
  updatedAt: string;
};

//Amplifyの認証機能用の型
export interface AuthWrapperProps {
  signOut?: () => void; // オプショナル
  user?: {
    username: string;
  };
  children?: React.ReactNode;
}
