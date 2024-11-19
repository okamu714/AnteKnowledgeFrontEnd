import React, { useEffect, useState } from 'react';
import AuthWrapper from './components/AuthWrapper';
import { User } from './types/'; // 型をインポート

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // User型配列
  const [name, setName] = useState<string>(''); // nameは文字列
  const [email, setEmail] = useState<string>(''); // emailも文字列

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { name, email } }),
    })
      .then((response) => response.json())
      .then((newUser: User) => setUsers([...users, newUser])) // 新しいユーザーを型指定
      .catch((error) => console.error('Error creating user:', error));
  };

  return (
    <AuthWrapper>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default App;
