import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import Loading from './Loading';

interface UserInfo {
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface Metadata {
  product_id: string;

  product_name: string;
  userId: string;
}

const PurchaseSuccess = () => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // stripeのメタデータを取得
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get('session_id');
      console.log('Session ID:', sessionId); // デバッグ用

      if (sessionId) {
        fetch(`http://localhost:3000/api/stripe/${sessionId}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            if (data.metadata) {
              setMetadata(data.metadata);
            } else if (data.error) {
              setError(data.error);
            }
          })
          .catch((err) => {
            console.error('Error fetching metadata:', err);
            setError('メタデータの取得中にエラーが発生しました。');
          });
        console.log(metadata);
      } else {
        setError('セッションIDが見つかりませんでした。');
      }
    }, 500); // 500ミリ秒遅延

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  // 購入履歴を保存する非同期関数
  useEffect(() => {
    const savePurchaseHistory = async (metadata: Metadata) => {
      try {
        const response = await fetch(
          'http://localhost:3000/purchase_histories',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: metadata.userId,
              product_id: metadata.product_id,
            }),
          }
        );

        const result = await response.json();
        if (response.ok) {
          setMessage(result.message); // 成功/重複時のメッセージを表示
        } else {
          setError(result.error || '購入履歴の保存に失敗しました。');
        }
      } catch (err) {
        console.error('Error saving purchase history:', err);
        setError('サーバーとの通信中にエラーが発生しました。');
      }
    };

    // Metadataが存在する場合に保存処理を呼び出す
    if (metadata) {
      savePurchaseHistory(metadata);
    }
  }, [metadata]);

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-screen bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="mx-auto -mt-10  max-w-screen-xl h-fit border-black border-4 rounded bg-white">
          <div className="flex items-center justify-center my-10">
            <div className="p-6 rounded-lg ">
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 border-x-2 border-gray-600 w-[600px] m-auto">
                ご購入いただき、ありがとうございます！
              </h1>
              {metadata ? (
                <div className="my-4 text-center font-genkaku text-xl">
                  <p>商品名: {metadata.product_name}</p>
                </div>
              ) : (
                <Loading />
              )}
              <p className="text-center text-gray-600">
                購入した記事は下の文字をクリックまたはマイページでご覧いただけます！
              </p>
              <div className="mt-6 text-center">
                <Link
                  to={`/ebook/${metadata?.product_id}`}
                  className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                >
                  購入した記事を読む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PurchaseSuccess;
