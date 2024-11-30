import React, { useEffect, useState } from 'react';
import { Blogs, Books } from '../types';
import { Link } from 'react-router-dom';
// import CheckoutButton from './CheckoutButton';
// import { useAuth } from '../context/AuthContext';

type BlogProps = {
  blog: Blogs; // Books型の定義があることを前提
};

interface UserInfo {
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  // const { isAuthenticated, user, setUser } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link to={`/blog/${blog?.id}`}>
        {/* カード一枚の設定 */}
        <div
          key={blog.id}
          className="group min-h-[300px] max-h-[300px] border-gray-600 transition duration-125 hover:shadow-2xl hover:scale-105 checked:scale-105 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          {/* 画像 */}
          <div className="w-full ">
            <a href="#">
              <img
                className="p-1 mt-2 rounded-t-lg  max-h-[200px] min-h-[200px] object-scale-down m-auto"
                src={blog.eyecatch?.url}
                alt="product image"
              />
            </a>
          </div>

          {/* タイトル */}
          <div className="px-5 pb-5 pt-2 border-t border-gray-500 ">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
            </a>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
