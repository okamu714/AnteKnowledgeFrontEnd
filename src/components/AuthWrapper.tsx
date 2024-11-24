import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { I18n } from '@aws-amplify/core';
import {
  Authenticator,
  translations,
  useAuthenticator,
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { AuthWrapperProps } from '../types/index';
import Navber from './Navber';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from './Home';
import MyPage from './MyPage';

Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage('ja');

// Props の定義を更新
type Props = AuthWrapperProps & WithAuthenticatorProps;

const AuthWrapper: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { user, route } = useAuthenticator((context) => [
    context.user,
    context.route,
  ]);

  // ユーザー情報をRailsに送信
  useEffect(() => {
    if (route === 'authenticated' && user) {
      // ユーザー情報をコンテキストに保存
      setUser(user);

      // バックエンドにユーザー情報を送信
      const sendUserInfoToBackend = async () => {
        try {
          const response = await fetch('http://localhost:3000/user_infos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.signInDetails!.loginId, // Amplifyのemail属性
              user_id: user.userId, // Amplifyの一意なID（sub）
            }),
          });

          if (response.ok) {
            console.log(
              'ユーザー情報を正常に送信しました:',
              await response.json()
            );
          } else {
            console.error(
              'ユーザー情報の送信に失敗しました:',
              await response.json()
            );
          }
        } catch (error) {
          console.error('バックエンドとの通信エラー:', error);
        }
      };

      sendUserInfoToBackend();
    }
  }, [route, user, setUser]);

  // コンポーネントが初めてマウントされた時にユーザー情報を送信
  // useEffect(() => {
  //   sendUserInfoToBackend();
  // }, [user?.signInDetails]);

  // 認証完了後、マイページにリダイレクト
  // useEffect(() => {
  //   if (isAuthComplete) {
  //     navigate('/mypage'); // マイページに遷移
  //   }
  // }, [isAuthComplete, navigate]);

  return (
    <>
      {/* <Authenticator /> */}
      <MyPage />
    </>
  );
};

// 型パラメータを削除し、キャストも不要
export default withAuthenticator(AuthWrapper);
