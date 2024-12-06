import ScrollHint from './ScrollHint';
import Footer from './Footer';
import ImageSwitcher from './ImageSwitcher/ImageSwitcher';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className="w-screen h-fit overflow-hidden mt-7 bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400"
        id="home"
      >
        {/* Topエリア */}
        <div className="relative w-screen h-screen bg-neutral-500">
          {/* 背景画像 */}
          <img
            src="/pic/couple-5946815_1920.jpg"
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
        <div className="relative w-screen h-screen grid place-items-center ">
          {/* 文字を前面に配置 */}
          <h1 className="items-center mt-10 font-mono text-gray-400 text-shadow-xl  text-5xl font-bold ">
            <span>- About -</span>
          </h1>
          <div className="w-[1100px] flex justify-center items-center -mt-20 pb-32 border-b-2 border-gray-800 border-b-opacity-10">
            {/* 画像切り替えコンポーネント */}
            <ImageSwitcher
              frontImage="/pic/Logos/original.png"
              backImage="/pic/Logos/whiteBaseBlackFont.png"
            />
            <div className="h-fit w-[900px] p-3 ml-24 font-zen text-gray-900 bg-white bg-opacity-70 rounded shadow-2xl">
              <div className="mb-4 text-center border-x-2 border-black px-2">
                <span className="text-xl text-neutral-700 font-bold tracking-wider leading-relaxed">
                  「AnteKnowledge-アンテナレッジ-」は、
                  <br />
                  <span className="text-teal-200 text-2xl bg-gray-800 px-1">
                    Antenna(アンテナ)
                  </span>
                  と
                  <span className="text-neutral-200 text-2xl bg-gray-800 px-1">
                    Knowledge(知識)
                  </span>
                  <br />
                  を掛け合わせて生まれた言葉
                </span>
              </div>
              <div className="text-md text-center tracking-wide leading-relaxed">
                私はこのサイトを通じて、あなたの
                <span className="font-semibold">「やる気のアンテナ」</span>
                の感度を高く、
                <br />
                そして、強くするための{' '}
                <span className="font-semibold">知識</span>
                を届けたいと考えています。
                <br />
                <br />
                挑戦を続ける中で、今進む道が本当に正しいのか迷ったり、
                <br />
                自分は変われているのか不安になり、立ち止まることもあるかもしれません。
                <br />
                <br />
                そんな時に、ここの情報があなたの背中をそっと押し、
                <br />
                <span className="font-semibold border-b-black border-b-2">
                  次の一歩を踏み出す力になれたら。
                </span>
                <br />
                <br />
                そして、未来を見据えながら前を向いて歩くそのアンテナが、
                <br />
                <span className="font-semibold border-b-black border-b-2">
                  さらに遠くを、強く捉えられるようになったら。
                </span>
                <br />
                <br />
                アンテナレッジは、そんな情報をお届けできる場所を目指しています。
              </div>
            </div>
          </div>
        </div>

        {/* Featureエリア */}
        <div className="relative w-[1100px] h-screen m-auto grid place-items-center border-b-2 border-gray-800 border-b-opacity-10 ">
          {/* 文字を前面に配置 */}
          <h1 className="items-center font-mono text-gray-400 text-shadow-xl text-5xl font-bold -mt-10">
            <span>- Feature -</span>
            <span className="text-xl"></span>
          </h1>
          {/* ３枚のカード大元 */}
          <div className="grid grid-cols-3 gap-20 -mt-32 opacity-70 shadow-2xl bg-white bg-opacity-70 rounded p-20">
            {/* ブログカードの内容 */}
            <div className="text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-900">
              <div className="grid grid-cols-1 px-5">
                <span className=" text-neutral-50 text-2xl font-bold mt-5 border-b-2 border-neutral-50 h-fit pb-2 px-20 w-fit m-auto mb-4">
                  ブログ
                  <br />
                  -Blog-
                </span>
                <span className="text-lg leading-10 font-zen font-normal text-gray-100">
                  日常の出来事や体験記、
                  <br />
                  日々のちょっとした気づきを
                  <br />
                  気軽に投稿します。
                </span>
                <Link
                  to="/blog"
                  id="blog"
                  className="relative w-52 h-fit flex justify-center items-center bg-neutral-100 text-neutral-100 font-semibold px-6 py-2 m-auto mt-10 rounded-md overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-neutral-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 text-xl text-gray-700">
                    ブログページは
                    <br />
                    こちら{' '}
                  </span>
                </Link>
              </div>
            </div>
            {/* 電子記事カードの内容 */}
            <div className="text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-900">
              <div className="grid grid-cols-1 ">
                <span className=" text-neutral-50 text-2xl font-bold mt-5 border-b-2 border-neutral-50 h-fit pb-2 px-16 w-fit m-auto mb-4">
                  電子記事
                  <br />
                  -eBooks-
                </span>
                <span className="text-base leading-10 font-zen font-normal text-gray-100">
                  文系からエンジニアを目指す私の
                  <br />
                  就活記録や作品を公開します。
                  <br />
                  ※記事購入にはログイン必須。
                </span>
                <Link
                  to="/ebook"
                  id="ebook"
                  className="relative w-52 h-fit flex justify-center items-center bg-neutral-100 text-neutral-100 font-semibold px-6 py-2 m-auto mt-10 rounded-md overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-neutral-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 text-xl text-gray-700">
                    電子記事ページは
                    <br />
                    こちら{' '}
                  </span>
                </Link>
              </div>
            </div>
            {/* コード紹介カードの内容 */}
            <div className="text-center w-72 h-96 bg-neutral-700 rounded border-2 shadow-2xl transition duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-900">
              <div className="grid grid-cols-1 ">
                <span className=" text-neutral-50 text-2xl font-bold mt-5 border-b-2 border-neutral-50 h-fit pb-2 px-1 w-fit m-auto mb-4">
                  コード紹介
                  <br />
                  -Code Introduction-
                </span>
                <span className="text-base leading-10 font-zen font-normal text-gray-100">
                  今まで作成した
                  <br />
                  特定の動きやギミックの作り方を、
                  <br />
                  共有(兼自分用メモに)します。
                </span>
                <Link
                  to="/introCodes"
                  id="introCodes"
                  className="relative w-56 h-fit flex justify-center items-center bg-neutral-100 text-neutral-100 font-semibold px-3 py-2 m-auto mt-10 rounded-md overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-neutral-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 text-xl text-gray-700">
                    コード紹介ページは
                    <br />
                    こちら{' '}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profileエリア */}
        <div className="relative w-[1100px] h-screen m-auto grid place-items-center">
          {/* 文字を前面に配置 */}
          <h1 className="items-center font-mono text-gray-400 text-shadow-xl text-5xl font-bold mt-10">
            <span>- Profile -</span>
            {/* 他のテキストを追加する場合は、ここに追加 */}
          </h1>
          <div className="flex items-center -mt-2 opacity-70 shadow-2xl bg-white bg-opacity-70 rounded p-10 w-[1100px] h-fit m-auto">
            <img
              src="/pic/IMG_216_copy.jpg"
              className="w-[300px] h-fit rounded-full border-2 border-gray-600 mx-10"
            />
            <div className="text-md text-left tracking-wide leading-8">
              <span className="text-teal-200 text-2xl font-bold bg-gray-800 p-1">
                私の名前はAntenna(アンテナ)です
              </span>
              <br />
              <span className="text-sky-500 text-2xl font-bold bg-gray-800 p-1">
                文系の中堅私立大からエンジニアを目指しています
              </span>
              <br />
              <span className="text-rose-500 text-2xl font-bold bg-gray-800 p-1">
                人生の目的は、「自分の作ったサービス」で
              </span>
              <br />
              <span className="text-rose-500 text-2xl font-bold bg-gray-800 p-1">
                「自分の信念を持って行動する人」を増やすこと
              </span>
              <br />
              <span className="text-amber-300 text-2xl font-bold bg-gray-800 p-1">
                そして人の信念に共感し合える優しい世界を作ること
              </span>
              <br />
              <span className="text-green-400 text-2xl font-bold bg-gray-800 p-1">
                夢はでっかく、何より自分が楽しいと思える方向へ
              </span>
              <br />
              <span className="text-green-400 text-2xl font-bold bg-gray-800 p-1">
                毎日少しずつ前進中！
              </span>
              <br />
              <span className="text-violet-300 text-2xl font-bold bg-gray-800 p-1">
                "一緒に"頑張りましょう！
              </span>
            </div>
          </div>
          <Link
            to="/login"
            id="login"
            className="relative w-96 h-fit flex justify-center items-center bg-neutral-800 text-neutral-100 font-semibold px-6 py-2 m-auto mt-10 rounded-md overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-neutral-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 text-lg text-gray-100 tracking-wide">
              ログイン/サインアップはこちらから
            </span>
          </Link>
        </div>

        {/* Scroll Hint */}
        <ScrollHint scrollTarget="about" />

        {/* footerエリア */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
