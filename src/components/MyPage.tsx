import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface UserInfo {
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, setUser } = useAuth();
  const { signOut } = useAuthenticator();
  const [showToast, setShowToast] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleSignOut = () => {
    setUser(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000); // 1秒後に非表示
    setTimeout(() => signOut(), 1100);
    setTimeout(() => navigate('/'), 1100);
  };

  // ユーザー情報をRailsから取得
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          `http://localhost:3000/user_infos/${user.userId}`, // `user.userId`でCognitoのsubを使用
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching user info: ${response.status}`);
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [user]);

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 py-96 max-w-screen-xl h-fit border-black border-4 rounded bg-white">
          <div className="flex justify-center text-black">
            <div className="mt-40 grid grid-cols-1 gap-4">
              <span>マイページです</span>
              {/* ユーザー情報表示 */}
              {userInfo ? (
                <div className="mt-10 p-4 bg-gray-100 rounded shadow-md">
                  <h2 className="text-lg font-bold">ログイン情報</h2>
                  <p>
                    <strong>Email:</strong> {userInfo.email}
                  </p>
                  <p>
                    <strong>User ID:</strong> {userInfo.user_id}
                  </p>
                  <p>
                    <strong>Created At:</strong>{' '}
                    {new Date(userInfo.created_at).toLocaleString()}
                  </p>
                  <p>
                    <strong>Updated At:</strong>{' '}
                    {new Date(userInfo.updated_at).toLocaleString()}
                  </p>
                </div>
              ) : (
                <p>ユーザー情報を読み込んでいます...</p>
              )}
              <button
                onClick={handleSignOut}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Toast メッセージ */}
      {showToast && (
        <div
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-gray-700 text-white rounded shadow-lg transition-all duration-200 ease-in-out ${
            showToast ? 'translate-y-0 opacity-90' : 'translate-y-5 opacity-0'
          }`}
        >
          <p className="font-bold text-white">サインアウトしました</p>
        </div>
      )}
    </>
  );
};

export default MyPage;
