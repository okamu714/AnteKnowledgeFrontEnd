import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../libs/microCMS/client';
import { Books, PurchaseHistory } from '../types';
import { title } from 'process';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton';
import Book from './Book';
import { useAuth } from '../context/AuthContext';
import Loading from './Loading';

const EBooks: React.FC = () => {
  const { isAuthenticated, user, setUser } = useAuth();
  const [purchaseProductIds, setPurchaseProductIds] = useState<
    PurchaseHistory[]
  >([]);
  const [books, setBooks] = useState<Books[]>([]);

  // すべての電子記事をmicroCMSから取得
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

  // 履歴検索
  useEffect(() => {
    const fetchPurchaseHistories = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          `http://localhost:3000/user_purchase_histories?user_id=${user.userId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching purchase histories: ${response.status}`
          );
        }

        const data = await response.json();
        // console.log(data);
        const productIds = data.map(
          (productId: PurchaseHistory) => productId.product_id
        );
        setPurchaseProductIds(productIds);
        console.log(purchaseProductIds);
      } catch (error) {
        console.error('Error fetching purchase histories:', error);
      }
    };

    fetchPurchaseHistories();
  }, [user]);
  // console.log(user);

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 pb-96 px-10 max-w-screen-xl h-fit min-h-screen border-black border-4 rounded bg-white">
          <div className=" text-black">
            <div className="w-[1000px] m-auto pb-5">
              <p className="flex text-left mb-1 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                電子記事一覧
              </p>
              <span className="block bg-gray-500 w-full h-0.5"></span>
            </div>

            {books.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {books.map((book: Books) => (
                  <Book
                    book={book}
                    key={book.id}
                    isPurchased={purchaseProductIds.includes(book.id as any)}
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EBooks;
