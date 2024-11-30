import React, { useEffect, useState } from 'react';
import AuthWrapper from './components/AuthWrapper';
import { User } from './types/'; // 型をインポート
import EBooks from './components/EBooks';
import Navber from './components/Navber';
import Home from './components/Home';
import Blog from './components/Blog';
import IntroCodes from './components/IntroCodes';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions } from '@stripe/stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MyPage from './components/MyPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import PurchaseSuccess from './components/PurchaseSuccess';
import ProductDetail from './components/ProductDetail';
import Template from './components/Template';
import ScrollToTop from './components/ScrollTop';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';

const stripePromise = loadStripe(
  'pk_test_51QMsOaK9yUy0vysUKbnXwqTPQNnneX80rFejx2w01CdzJHx4qEmJ9KQd5opywl3fSYwtXSsKcSoPZdYj274xXB1V00RJQ628zc'
);

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // User型配列
  const [name, setName] = useState<string>(''); // nameは文字列
  const [email, setEmail] = useState<string>(''); // emailも文字列
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  //railsで作成した情報を取得
  // useEffect(() => {
  //   // サーバーからユーザーのリストを取得する
  //   fetch('http://localhost:3000/users')
  //     .then((response) => {
  //       // レスポンスが正常（ステータスコード200台）であるか確認
  //       if (!response.ok) {
  //         // 異常な場合はエラーを投げる
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       // レスポンスをJSON形式に変換して返す
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // 取得したデータをステートに保存（ユーザーリストを更新）
  //       setUsers(data);
  //     })
  //     .catch((error) => {
  //       // リクエストやレスポンス処理でエラーが発生した場合にログ出力
  //       console.error('Error fetching users:', error);
  //     });
  // }, []); // 初回レンダリング時にのみ実行する

  // //新規ユーザーの追加
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // フォームのデフォルトの送信動作を無効化（ページリロードを防止）
  //   e.preventDefault();

  //   // サーバーに新しいユーザーを追加するリクエストを送信
  //   fetch('http://localhost:3000/users', {
  //     method: 'POST', // HTTPメソッドをPOSTに指定（新しいリソースを作成）
  //     headers: {
  //       'Content-Type': 'application/json', // リクエストのデータ形式をJSONと指定
  //     },
  //     // リクエストボディに新しいユーザーのデータをJSON形式で送信
  //     body: JSON.stringify({ user: { name, email } }),
  //   })
  //     .then((response) => {
  //       // サーバーから返されたレスポンスをJSON形式に変換
  //       return response.json();
  //     })
  //     .then((newUser: User) => {
  //       // 新しく作成されたユーザーを既存のユーザーリストに追加してステートを更新
  //       setUsers([...users, newUser]);
  //     })
  //     .catch((error) => {
  //       // リクエストやレスポンスでエラーが発生した場合にログ出力
  //       console.error('Error creating user:', error);
  //     });
  // };

  // 決済用
  // useEffect(() => {
  //   fetch('http://localhost:3000/create-checkout-session', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ items: [{ id: 'item1', amount: 1000 }] }),
  //     // credentials: 'include',
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log('Received clientSecret:', data.clientSecret); // ログを追加
  //       setClientSecret(data.clientSecret);
  //     })
  //     .catch((error) =>
  //       console.error('Error fetching clientSecret:', error.message)
  //     );
  // }, []);

  // const getUserInfo = async () => {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     const email = user.attributes.email;
  //     const sub = user.attributes.sub; // Cognito User ID

  //     return { email, sub };
  //   } catch (error) {
  //     console.error('Error fetching user info:', error);
  //   }
  // };

  // const options: StripeElementsOptions | undefined = clientSecret
  //   ? {
  //       clientSecret, // 必須: PaymentIntentのクライアントシークレット
  //       appearance: {
  //         theme: 'stripe', // Stripe提供のテーマ
  //       },
  //     }
  //   : undefined;

  return (
    <AuthProvider>
      <Authenticator.Provider>
        <Router>
          <Navber />
          <ScrollToTop /> {/* ScrollToTopをRoutesの前に配置 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/login" element={<AuthWrapper />} />
            <Route
              path="/mypage"
              element={<ProtectedRoute component={MyPage} />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ebook" element={<EBooks />} />
            <Route path="/introCodes" element={<IntroCodes />} />
            <Route path="/succes" element={<PurchaseSuccess />} />
            <Route path="/cancel" element={<EBooks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ebook/:productId" element={<ProductDetail />} />
            <Route path="/blog/:productId" element={<BlogDetail />} />
            {/* 不明なパスはホームにリダイレクト */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Router>
      </Authenticator.Provider>
    </AuthProvider>
  );
};

const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { user } = useAuthenticator((context) => [context.user]);
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
