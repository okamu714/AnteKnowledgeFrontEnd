import React from 'react';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton';

const Template = () => {
  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 py-96 max-w-screen-xl h-fit border-black border-4 rounded bg-white">
          <div className="flex justify-center text-black">
            <div className="mt-40 grid grid-cols-1 gap-4">
              {/* ここに内容を追加 */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Template;
