// User型定義
export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

// 電子記事の型定義
export type Books = {
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

  // setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserInfo {
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface PurchaseHistory {
  id: string;
  product_id: string;
  product_name: string;
  purchased_at: string;
}
