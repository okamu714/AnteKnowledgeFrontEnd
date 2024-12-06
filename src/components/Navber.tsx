import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navber = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="sticky top-4 z-50 w-11/12 mx-auto -mt-24 flex items-center justify-between px-4 py-2  backdrop-blur-md text-white bg-neutral-500 bg-opacity-60 shadow-xl rounded-lg ">
      {/* 左の要素 */}
      <div className="relative top-2 left-4 p-4 w-[170px] h-[50px]" id="left">
        <Link to="/" className="group">
          {/* 白に透過背景 */}
          <img
            src="/pic/Logos/White_bgnone.png"
            className="absolute inset-0 w-auto h-auto ease-in transition duration-100 group-hover:opacity-0 group-hover:scale-110"
          />
          {/* 黒に透過背景 */}
          <img
            src="/pic/Logos/Black_bgnone.png" // アップロードした黒画像のパスに変更
            alt="黒"
            className="absolute inset-0 w-auto h-auto ease-out opacity-0 transition duration-300 group-hover:opacity-100 group-hover:scale-125"
          />
        </Link>
      </div>

      {/* 中央の要素 */}
      <div id="center" className="flex space-x-8"></div>

      {/* 右の要素 */}
      <div id="right" className="flex flex-wrap space-x-8 items-center">
        <Link
          to="/blog"
          id="Blog"
          className="group transition-all duration-300 hover:text-2xl text-white  font-semibold text-lg"
        >
          ブログ
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
        </Link>
        <Link
          to="/ebook"
          id="eBooks"
          className="group transition-all duration-300 hover:text-2xl text-white  font-semibold text-lg"
        >
          電子記事
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
        </Link>
        <Link
          to="/introCodes"
          id="introCodes"
          className="group transition-all duration-300 hover:text-2xl text-white  font-semibold text-lg"
        >
          コード紹介
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
        </Link>

        {isAuthenticated ? (
          <Link
            to="/mypage"
            id="mypage"
            className="relative flex justify-center items-center bg-neutral-700 text-neutral-100 font-semibold px-6 py-2 rounded-md overflow-hidden group hover:scale-110 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-neutral-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10">マイページ</span>
          </Link>
        ) : (
          <Link
            to="/login"
            id="Auth"
            className="relative flex justify-center items-center bg-neutral-700 text-neutral-100 font-semibold px-6 py-2 rounded-md overflow-hidden group hover:scale-110 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-neutral-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10">ログイン</span>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Navber;
