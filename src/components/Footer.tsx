import React from 'react';

const Footer = () => {
  return (
    <div className="">
      <div className="w-screen bg-gray-900 py-10 ">
        {/* 文字を前面に配置 */}
        <img
          className="m-auto max-w-[200px] h-fit mb-6"
          src="./../../pic/Logos/White_bgnone.png"
        />
        <p className="text-center text-sm text-gray-300 ">
          Copyright © 2024 AnteKnowledge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
