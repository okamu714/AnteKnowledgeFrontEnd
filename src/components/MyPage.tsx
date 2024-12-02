import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Books, PurchaseHistory, UserInfo } from '../types';
import Loading from './Loading';
import { createClient } from 'microcms-js-sdk';
import PurchaseDetailBook from './PurchaseDetailBook';

const serviceDomain =
  import.meta.env.VITE_SERVICE_DOMAIN || process.env.REACT_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_API_KEY || process.env.REACT_API_KEY;

const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});
const backend =
  import.meta.env.VITE_PUBLIC_API_URL || process.env.REACT_PUBLIC_API_URL;

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { signOut } = useAuthenticator();
  const [showToast, setShowToast] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [purchaseHistories, setPurchaseHistories] = useState<
    PurchaseHistory[] | null
  >(null); // 初期値をnullに設定
  const [products, setProducts] = useState<Books[] | null>(null); // 初期値をnullに設定
  const [loading, setLoading] = useState(true); // 全体のローディング状態を管理

  console.log(purchaseHistories);

  // サインアウトの動き
  const handleSignOut = () => {
    setUser(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000); // 1秒後に非表示
    setTimeout(() => signOut(), 1100);
    setTimeout(() => navigate('/'), 1100);
  };

  // データの取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return;

        // ユーザー情報を取得
        const userInfoResponse = await fetch(
          `${backend}user_infos/${user.userId}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        if (!userInfoResponse.ok) throw new Error('Failed to fetch user info');
        const userInfoData = await userInfoResponse.json();
        setUserInfo(userInfoData);

        // 購入履歴を取得
        const purchaseHistoriesResponse = await fetch(
          `${backend}user_purchase_histories?user_id=${userInfoData.user_id}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        if (!purchaseHistoriesResponse.ok)
          throw new Error('Failed to fetch purchase histories');
        const purchaseHistoriesData = await purchaseHistoriesResponse.json();
        setPurchaseHistories(purchaseHistoriesData);

        // 購入履歴が存在する場合、商品データを取得
        if (purchaseHistoriesData.length > 0) {
          const productIds = purchaseHistoriesData.map(
            (item: PurchaseHistory) => item.product_id
          );
          const productsResponse = await client.get({
            endpoint: 'ebook',
            queries: { ids: productIds.join(',') },
          });
          setProducts(productsResponse.contents);
        } else {
          setProducts([]); // 購入履歴がない場合、空の配列を設定
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // 全てのデータ取得が終了
      }
    };

    fetchData();
  }, [user]);

  // ローディング中の表示
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div
        id="wrapper"
        className="w-screen min-h-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 max-w-screen-xl min-h-[700px] h-fit border-black border-4 rounded bg-white">
          <div className="text-black">
            <div className="w-[1000px]">
              <div className="mb-10">
                <p className="flex text-left mb-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  プロフィール
                </p>
                <span className="block bg-gray-500 w-full h-0.5"></span>

                {/* ユーザー情報表示 */}
                {userInfo ? (
                  <div className="mt-1 text-center">
                    <p>
                      <strong className="pr-4">
                        現在ログイン中のメールアドレス:
                      </strong>
                      <span className="bg-gray-700 text-gray-700 rounded-md hover:bg-white transition-all duration-100">
                        {userInfo.email}
                      </span>
                    </p>
                    <p>
                      <strong>登録日:</strong>{' '}
                      {new Date(userInfo.created_at).toLocaleString()}
                    </p>
                  </div>
                ) : (
                  <p>ユーザー情報が取得できません。</p>
                )}
              </div>

              <p className="flex text-left mb-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                購入した記事
              </p>
              <span className="block bg-gray-500 w-full h-0.5"></span>
              {/* 購入履歴表示 */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {products && products.length > 0 ? (
                  products.map((product: Books) => (
                    <PurchaseDetailBook product={product} key={product.id} />
                  ))
                ) : (
                  <>
                    <div></div>
                    <p className="text-center mb-72 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">
                      購入した記事がありません。
                    </p>
                  </>
                )}
              </div>

              <div className="group flex justify-center mt-16 relative">
                <button
                  onClick={handleSignOut}
                  className="bg-neutral-900 text-neutral-100 font-semibold px-4 py-2 rounded hover:bg-red-700"
                >
                  サインアウトはこちらから
                </button>
                <div className="absolute top-full mt-2 text-sm text-gray-500 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  押すとすぐにサインアウトが始まりますのでご注意ください。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Toast メッセージ */}
      {showToast && (
        <div
          className="fixed top-24 left-1/2 transform -translate-x-1/2 p-4 bg-gray-700 text-white rounded shadow-lg transition-all duration-200 ease-in-out ${
            showToast ? 'translate-y-0 opacity-90' : 'translate-y-5 opacity-0'
          }"
        >
          <p className="font-bold text-white">サインアウトしました</p>
        </div>
      )}
    </>
  );
};

export default MyPage;
