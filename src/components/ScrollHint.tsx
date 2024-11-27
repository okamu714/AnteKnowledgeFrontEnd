import React, { useEffect, useState } from 'react';

type ScrollHintProps = {
  scrollTarget?: string; // スクロール先のターゲットID (任意)
};

const ScrollHint: React.FC<ScrollHintProps> = ({ scrollTarget }) => {
  const [showTopButton, setShowTopButton] = useState(false);

  // スクロール位置を監視
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10; // 高さ調整
      setShowTopButton(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態で呼び出す
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // スクロール処理
  const handleScroll = () => {
    const target = scrollTarget ? document.getElementById(scrollTarget) : null;

    if (target && target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // 一番上までスクロール
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // console.log(document.documentElement.scrollHeight);
  // console.log(window.innerHeight + window.scrollY);

  return (
    <>
      {/* スクロールヒント(一番下まで行くと上に案内) */}
      {showTopButton ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 left-7 bg-gray-700 text-white text-base px-3 py-2 rounded-full opacity-70 hover:opacity-90 hover:bg-gray-800 transition duration-300"
        >
          ↑ Top
        </button>
      ) : (
        <div
          className="fixed bottom-10 left-10 flex flex-col items-center cursor-pointer group"
          onClick={handleScroll}
        >
          <span className="text-gray-500 text-lg group-hover:text-gray-700 transition duration-300">
            Scroll
          </span>
          <div className="animate-bounce mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 group-hover:text-gray-700 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollHint;
