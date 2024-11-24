import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="relative w-screen bg-gray-900">
        {/* 文字を前面に配置 */}
        <h1 className="flex flex-col items-center pt-24  font-genkaku text-gray-800 text-6xl font-bold leading-relaxed opacity-75 py-10">
          <span>
            フッター
            <span className="block mt-2 h-0.5 bg-gray-800 w-full"></span>
          </span>
          {/* 他のテキストを追加する場合は、ここに追加 */}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
