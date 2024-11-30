import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { client } from '../libs/microCMS/client';
import Loading from './Loading';
import Imgix from 'react-imgix';
import Footer from './Footer';

const BlogDetail = () => {
  const { productId } = useParams<string>();
  const [blog, setBlog] = useState<any>(null);
  const { user } = useAuth(); // ログインユーザー情報を取得
  const [purchaseProductIds, setPurchaseProductIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); // 全体のローディング状態を管理

  // 記事をmicroCMSから取得
  const fetchArticle = async (productId: string | undefined) => {
    try {
      const blog = await client.get({
        endpoint: 'blogs',
        contentId: productId,
      });
      setBlog(blog);
      setLoading(false);
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
  console.log(blog);

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
              {blog ? (
                <>
                  <img
                    src={blog.eyecatch?.url}
                    className="w-full h-[330px] mt-2 object-cover object-center"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <div
                      className="prose text-gray-700 mt-2 break-words whitespace-normal overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        公開日: {new Date(blog.createdAt).toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        最終更新: {new Date(blog.updatedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/blog"
                    id="blog"
                    className="flex justify-center items-center bg-neutral-700 text-neutral-100 font-semibold px-6 py-2 my-10 rounded-md overflow-hidden group hover:scale-110 transition-all duration-300"
                  >
                    <span className="relative z-10">ブログページへ戻る</span>
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

export default BlogDetail;
