import React from 'react';
import Navber from './Navber';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className="w-screen h-fit overflow-hidden mt-7" id="home">
        {/* Topエリア */}
        <div className="relative w-screen h-screen bg-neutral-500">
          {/* 背景画像 */}
          <img
            src="./../pic/couple-5946815_1920.jpg"
            className="absolute inset-0 w-full h-full opacity-65"
            alt="背景画像"
          />
          {/* 文字を前面に配置 */}
          <h1 className="absolute inset-0 flex flex-col items-end pr-5 justify-center font-genkaku text-white text-6xl font-bold leading-relaxed animate-slideIn opacity-75">
            <span>
              夢を追う知識で
              <span className="block -mt-2 h-0.5 bg-white animate-underlineGrow opacity-75"></span>
            </span>
            <span>
              あなたのアンテナを
              <span className="block -mt-2 h-0.5 bg-white animate-underlineGrow opacity-75"></span>
            </span>
            <span>
              研ぎ澄ます
              <span className="block -mt-2 h-0.5 bg-white animate-underlineGrow opacity-75"></span>
            </span>
          </h1>
        </div>

        {/* Aboutエリア */}
        <div className="relative w-screen h-screen bg-slate-200 grid place-items-center">
          {/* 文字を前面に配置 */}
          <h1 className="absolute inset-0 flex flex-col items-center pt-24  font-genkaku text-gray-800 text-6xl font-bold leading-relaxed animate-fadeIn opacity-75">
            <span>- About -</span>
          </h1>
          <div className="grid grid-cols-2 gap-10 m-10 mt-16">
            <div className="h-96 w-96 mr-44 flex items-center justify-center bg-white rounded-lg border-2 border-black shadow-2xl"></div>
            <div className="h-96 w-[120%] -ml-10 flex items-center justify-center bg-white rounded-lg border-2 border-black shadow-2xl"></div>
          </div>
        </div>

        {/* Featureエリア */}
        <div className="relative w-screen h-screen bg-gray-900">
          {/* 文字を前面に配置 */}
          <h1 className="flex flex-col items-center pt-24  font-genkaku text-white text-6xl font-bold leading-relaxed py-10">
            <span>- Feature -</span>
            <span className="text-xl">
              このサイトの機能を紹介しまああああああああああす
            </span>
            {/* 他のテキストを追加する場合は、ここに追加 */}
            <div className="grid grid-cols-3 gap-20 m-10 mt-16">
              <div className="flex justify-center text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-2xl hover:scale-110">
                <span className=" text-neutral-50 text-2xl font-normal mt-5">
                  Blog
                  <br />
                  ブログ
                </span>
              </div>
              <div className="flex justify-center text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-2xl hover:scale-110">
                <span className="text-neutral-50 text-2xl font-normal mt-5">
                  ebook
                  <br />
                  電子記事
                </span>
              </div>
              <div className="flex justify-center text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-2xl hover:scale-110">
                <span className="text-neutral-50 text-2xl font-normal mt-5">
                  Codes
                  <br />
                  コード紹介
                </span>
              </div>
            </div>
          </h1>
        </div>

        {/* Profileエリア */}
        <div className="relative w-screen h-screen bg-slate-300">
          {/* 文字を前面に配置 */}
          <h1 className="flex flex-col items-center pt-24 font-genkaku text-gray-800 text-6xl font-bold leading-relaxed opacity-75 py-10">
            <span>- Profile -</span>
            {/* 他のテキストを追加する場合は、ここに追加 */}
          </h1>
        </div>

        {/* footerエリア */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
