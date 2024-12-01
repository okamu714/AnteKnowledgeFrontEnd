import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Imgix from 'react-imgix';
import { createClient } from 'microcms-js-sdk';
import Loading from './Loading';
import { useAuth } from '../context/AuthContext';
import { PurchaseHistory } from '../types';

const serviceDomain =
  import.meta.env.VITE_SERVICE_DOMAIN || process.env.REACT_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_API_KEY || process.env.REACT_API_KEY;
const backend =
  import.meta.env.VITE_PUBLIC_API_URL || process.env.REACT_PUBLIC_API_URL;

const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});

const ProductDetail = () => {
  const { productId } = useParams<string>();
  const [ebook, setEbook] = useState<any>(null);
  const { user } = useAuth(); // ログインユーザー情報を取得
  const [purchaseProductIds, setPurchaseProductIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); // 全体のローディング状態を管理

  // ログインしていない場合
  useEffect(() => {
    if (!user) {
      setLoading(false);
    }
  }, [user]);

  // 購入履歴を取得
  useEffect(() => {
    const fetchPurchaseHistories = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          `${backend}user_purchase_histories?user_id=${user.userId}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching purchase histories: ${response.status}`
          );
        }

        const data = await response.json();
        const productIds = data.map(
          (product: PurchaseHistory) => product.product_id
        );
        setPurchaseProductIds(productIds);
      } catch (error) {
        console.error('Error fetching purchase histories:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchPurchaseHistories();
    }
  }, [user]);

  // 記事をmicroCMSから取得
  const fetchArticle = async (productId: string | undefined) => {
    try {
      const ebook = await client.get({
        endpoint: 'ebook',
        contentId: productId,
      });
      setEbook(ebook);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchArticle(productId);
    }
  }, [productId]);

  // ローディング中の表示
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  // ログインしていない場合の表示
  if (!user) {
    return (
      <div className="flex justify-center items-center flex-col h-screen text-center">
        <h1 className="text-4xl text-red-500 mb-6">ログインしてください</h1>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
        >
          ログインページへ移動
        </Link>
      </div>
    );
  }

  // 購入していない場合の表示
  if (!purchaseProductIds.includes(productId || '')) {
    return (
      <div className="flex justify-center items-center flex-col h-screen text-center">
        <h1 className="text-4xl text-red-500 mb-6">本を購入してください</h1>
        <Link
          to="/mypage"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
        >
          マイページへ戻る
        </Link>
      </div>
    );
  }

  // 記事の表示
  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 py-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 max-w-screen-xl min-h-[700px] h-fit border-black border-4 rounded bg-white">
          <div className="flex justify-center text-black">
            <div className="grid grid-cols-1 gap-4">
              {ebook ? (
                <>
                  <Imgix
                    className="w-full h-80 mt-2 object-cover object-center"
                    src={ebook.thumbnail.url}
                    htmlAttributes={{
                      alt: ebook.title,
                    }}
                    width={700}
                    height={700}
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold">{ebook.title}</h2>
                    <div
                      className="prose text-gray-700 mt-2 break-words whitespace-normal overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: ebook.content }}
                    />

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        公開日: {new Date(ebook.createdAt).toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        最終更新: {new Date(ebook.updatedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/mypage"
                    id="mypage"
                    className="flex justify-center items-center bg-neutral-700 text-neutral-100 font-semibold px-6 py-2 my-10 rounded-md overflow-hidden group hover:scale-110 transition-all duration-300"
                  >
                    <span className="relative z-10">マイページへ戻る</span>
                  </Link>
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
