import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="">
      <div className="w-screen bg-gray-900 py-10 ">
        {/* 文字を前面に配置 */}
        <img
          className="m-auto max-w-[200px] h-fit mb-3"
          src="/pic/Logos/White_bgnone.png"
        />
        <Link
          to="/contact"
          className="flex items-center justify-center text-[12px] text-gray-300 hover:text-blue-500 mb-2  m-auto"
        >
          [質問やお問い合わせがあればこちらよりお願い致します]
        </Link>
        <Link
          to="/termsofservice"
          className="flex items-center justify-center text-[12px] text-gray-300 hover:text-blue-500 mb-2 w-fit m-auto"
        >
          [通信販売に関する表示事項]
        </Link>
        <p className="text-center text-sm text-gray-300 ">
          Copyright © 2024 AnteKnowledge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
