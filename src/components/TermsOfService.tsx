import Footer from './Footer';

const TermsOfService: React.FC = () => {
  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-48 pb-10"
      >
        <div className="flex justify-center mx-auto -mt-10 pt-10 px-10 max-w-screen-xl h-fit min-h-screen border-black border-4 rounded bg-white">
          <div className="text-black">
            <div className="max-w-3xl mx-auto p-6">
              <h1 className="text-3xl font-semibold text-center mb-8">
                特定商取引法に基づく表記
              </h1>

              {/* 販売業者の名称 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  販売業者の名称
                </h2>
                <p>岡村 涼平</p>
              </section>

              {/* 所在地 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  所在地
                </h2>
                <p>請求がありましたら、遅滞なく開示いたします</p>
              </section>

              {/* 電話番号 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  電話番号
                </h2>
                <p>請求がありましたら、遅滞なく開示いたします</p>
              </section>

              {/* 運営統括責任者 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  運営統括責任者
                </h2>
                <p>岡村 涼平</p>
              </section>

              {/* 追加手数料等の追加料金 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  追加手数料等の追加料金
                </h2>
                <p>
                  記事の購入は「買い切り」の形式なので、追加料金は一切ございません。
                </p>
              </section>

              {/* 交換および返品（返金ポリシー） */}
              <section className="mb-6 ">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  交換および返品（返金ポリシー）
                </h2>
                <div>
                  <p>
                    電子記事の性質上、購入後の返金・交換は承っておりません。商品に不備があった場合には、購入後7日以内にご連絡いただければ、対応を検討させていただきます。
                  </p>
                </div>
              </section>

              {/* 引渡時期 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  引渡時期
                </h2>
                <p>購入手続きが完了次第、すぐに電子記事をご覧いただけます。</p>
              </section>

              {/* 受け付け可能な決済手段 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  受け付け可能な決済手段
                </h2>
                <p>クレジットカード</p>
              </section>

              {/* 決済期間 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  決済期間
                </h2>
                <p>お支払いは即時に処理されます。</p>
              </section>

              {/* 販売価格 */}
              <section className="mb-6">
                <h2 className="text-xl font-medium text-gray-700 mb-2 border-b-2">
                  販売価格
                </h2>
                <p>販売価格は各商品ページに記載された金額をご参照ください。</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
