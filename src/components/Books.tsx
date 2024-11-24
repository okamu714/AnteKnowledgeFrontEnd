import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../libs/microCMS/client';
import { Book } from '../types';
import { title } from 'process';
import Footer from './Footer';

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data.contents);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    setTimeout(() => fetchAllBooks(), 1000);
  }, []);

  const handleShowModal = () => {
    const modal = !showModal;
    setShowModal(modal);
  };

  return (
    // <div className="mt-28">

    // </div>
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 pb-96 px-10 max-w-screen-xl h-fit min-h-screen border-black border-4 rounded bg-white">
          <div className="justify-center grid grid-cols-1  text-black">
            <h1 className="text-center mb-7">電子書籍一覧</h1>
            {books.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {books.map((book) => (
                  <>
                    {/* カード一枚の設定 */}
                    <div
                      onClick={handleShowModal}
                      key={book.id}
                      className="group transition duration-125 hover:shadow-2xl hover:scale-105 checked:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      {/* 画像 */}
                      <div className="h-50">
                        <a href="#">
                          <img
                            className="p-1 rounded-t-lg object-contain m-auto"
                            src={book.thumbnail?.url}
                            alt="product image"
                          />
                        </a>
                      </div>

                      {/* タイトル */}
                      <div className="px-5 pb-5">
                        <a href="#">
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {book.title}
                          </h5>
                        </a>

                        {/* 値段表示 */}
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ¥{book.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                {showModal ? (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex justify-center items-center modal transition duration-125">
                    <div className="bg-white p-8 rounded-lg">
                      <h3 className="text-xl mb-4">本を購入しますか？</h3>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                        購入する
                      </button>
                      <button
                        onClick={handleShowModal}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <p>読み込み中</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
