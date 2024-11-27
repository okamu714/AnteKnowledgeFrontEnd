import React from 'react';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton';
import { useAuth } from '../context/AuthContext';

const Blog = () => {
  const { isAuthenticated, user, setUser } = useAuth();

  console.log(user);

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 pb-96 px-10 max-w-screen-xl h-fit min-h-screen border-black border-4 rounded bg-white">
          <div className="text-black">
            <div className="w-[1000px] m-auto pb-5">
              <p className="flex text-left mb-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                ブログ
              </p>
              <span className="block bg-gray-500 w-full h-0.5"></span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
