import React, { useEffect, useState } from 'react';
import { Books } from '../types';
import CheckoutButton from './CheckoutButton';
import { useAuth } from '../context/AuthContext';

type BookProps = {
  book: Books; // Books型の定義があることを前提
  isPurchased: boolean;
};

interface UserInfo {
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

const Book: React.FC<BookProps> = ({ book, isPurchased }) => {
  const { isAuthenticated, user, setUser } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const [showModal, setShowModal] = useState(false);

  // 購入済みか判別。falseならモーダル開かない
  const handleShowModal = () => {
    if (!user) {
      alert('電子記事はログインをすることで購入できます。');
    } else if (isPurchased) {
      alert('その商品は購入済みです。マイページからご覧いただけます。');
    } else {
      const modal = !showModal;
      setShowModal(modal);
    }
  };

  // モーダルを閉じる
  const cancelShowModal = () => {
    setShowModal(false);
  };

  // Amplifyのユーザー情報をRailsから取得
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
      {/* カード一枚の設定 */}
      <div
        onClick={handleShowModal}
        key={book.id}
        className="group transition duration-125 hover:shadow-2xl hover:scale-105 checked:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        {/* 画像 */}
        <div className="h-50">
          <a href="#">
            <img
              className="p-1 rounded-t-lg object-contain m-auto"
              src={book.thumbnail?.url}
              alt="product image"
            />
          </a>
        </div>

        {/* タイトル */}
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
          </a>

          {/* 値段表示 */}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ¥{book.price}
            </span>
          </div>
        </div>
      </div>

      {showModal ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-50 flex justify-center items-center z-50"
          style={{ overflowY: 'auto' }} // スクロール可能にする
        >
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl mb-4 text-center">本を購入しますか？</h3>
            <div className="grid grid-cols-2 gap-4">
              <CheckoutButton
                product_id={book.id}
                product_name={book.title}
                price={book.price}
                userId={userInfo?.user_id}
              />
              <button
                onClick={cancelShowModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Book;
