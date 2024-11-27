import React, { useEffect, useState } from 'react';
import { Books } from '../types';
import CheckoutButton from './CheckoutButton';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

type PurchaseDetailBookProps = {
  product: Books; // Books型の定義があることを前提
};

const PurchaseDetailBook: React.FC<PurchaseDetailBookProps> = ({ product }) => {
  // console.log(product);

  return (
    <>
      <Link to={`/ebook/${product?.id}`}>
        {/* カード一枚の設定 */}
        <div
          key={product.id}
          className="group transition duration-125 hover:shadow-2xl hover:scale-105 checked:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[300px]"
        >
          {/* 画像 */}
          <div className="h-52">
            <img
              className="p-1 rounded-t-lg object-contain m-auto"
              src={product.thumbnail?.url}
              alt="product image"
            />
          </div>

          {/* タイトル */}
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>

            {/* 値段表示 */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ¥{product.price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PurchaseDetailBook;
