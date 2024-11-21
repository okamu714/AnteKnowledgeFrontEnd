import React, { useEffect, useState } from 'react';
import AuthWrapper from './components/AuthWrapper';
import { User } from './types/'; // 型をインポート
import Books from './components/Books';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navber from './components/Navber';
import Home from './components/Home';
import Blog from './components/Blog';
import IntroCodes from './components/IntroCodes';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // User型配列
  const [name, setName] = useState<string>(''); // nameは文字列
  const [email, setEmail] = useState<string>(''); // emailも文字列

  //railsで作成した情報を取得
  useEffect(() => {
    // サーバーからユーザーのリストを取得する
    fetch('http://localhost:3000/users')
      .then((response) => {
        // レスポンスが正常（ステータスコード200台）であるか確認
        if (!response.ok) {
          // 異常な場合はエラーを投げる
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // レスポンスをJSON形式に変換して返す
        return response.json();
      })
      .then((data) => {
        // 取得したデータをステートに保存（ユーザーリストを更新）
        setUsers(data);
      })
      .catch((error) => {
        // リクエストやレスポンス処理でエラーが発生した場合にログ出力
        console.error('Error fetching users:', error);
      });
  }, []); // 初回レンダリング時にのみ実行する

  //新規ユーザーの追加
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // フォームのデフォルトの送信動作を無効化（ページリロードを防止）
    e.preventDefault();

    // サーバーに新しいユーザーを追加するリクエストを送信
    fetch('http://localhost:3000/users', {
      method: 'POST', // HTTPメソッドをPOSTに指定（新しいリソースを作成）
      headers: {
        'Content-Type': 'application/json', // リクエストのデータ形式をJSONと指定
      },
      // リクエストボディに新しいユーザーのデータをJSON形式で送信
      body: JSON.stringify({ user: { name, email } }),
    })
      .then((response) => {
        // サーバーから返されたレスポンスをJSON形式に変換
        return response.json();
      })
      .then((newUser: User) => {
        // 新しく作成されたユーザーを既存のユーザーリストに追加してステートを更新
        setUsers([...users, newUser]);
      })
      .catch((error) => {
        // リクエストやレスポンスでエラーが発生した場合にログ出力
        console.error('Error creating user:', error);
      });
  };

  return (
    // <AuthWrapper>
    //   <div>
    //     <h1>User List</h1>
    //     <ul>
    //       {users.map((user) => (
    //         <li key={user.name}>
    //           {user.name} - {user.email}
    //         </li>
    //       ))}
    //     </ul>
    //     <h2>Add User</h2>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <button type="submit">Add</button>
    //     </form>
    //   </div>
    //   <Books />
    // </AuthWrapper>
    <Router>
      <Navber />
      <Routes>
        <Route path="/authentication" element={<AuthWrapper />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ebook" element={<Books />} />
        <Route path="/introCodes" element={<IntroCodes />} />
      </Routes>
    </Router>
  );
};

export default App;
