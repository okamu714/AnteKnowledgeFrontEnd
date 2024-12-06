import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bd3z05m', // サービスID（EmailJSで確認）
        'template_3z6oy1n', // テンプレートID（EmailJSで確認）
        { name, email, message }, // テンプレートに渡すデータ
        'lWYkK2l5ny5QV351f' // パブリックキー（EmailJSで確認）
      )
      .then(
        (response) => {
          // console.log('メール送信成功:', response.text);
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('メール送信エラー:', error.text);
          setError(true);
        }
      );
  };

  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-fit bg-gradient-to-bl from-slate-800 via-gray-600 to-neutral-400 pt-40 pb-10"
      >
        <div className="flex justify-center text-black">
          <div className="">
            <div className="max-w-3xl w-[600px] mx-auto my-10 p-6 bg-gray-100 shadow-2xl rounded">
              <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
              {success && (
                <p className="text-green-500 mb-4">
                  お問い合わせを送信しました。ありがとうございます！
                </p>
              )}
              {error && (
                <p className="text-red-500 mb-4">
                  メール送信中にエラーが発生しました。
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">お名前</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">メールアドレス</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">メッセージ</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  送信
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
