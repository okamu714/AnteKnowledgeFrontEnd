// AuthWrapper.tsx

import React from 'react';
import { Amplify } from 'aws-amplify';
import { I18n } from '@aws-amplify/core';
import {
  translations,
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { AuthWrapperProps } from '../types/index';
import Navber from './Navber';

Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage('ja');

// Props の定義を更新
type Props = AuthWrapperProps & WithAuthenticatorProps;

const AuthWrapper: React.FC<Props> = ({ signOut, user }) => {
  return (
    <>
      <div className="text-center bg-blue-500 text-white p-4 mt-28">
        <h1 className="text-3xl">Welcome to AnteKnowledge Journal</h1>
        {user ? (
          <>
            <h3>私は権限を持っています: {user.username}</h3>
            {signOut && (
              <button
                onClick={signOut}
                className="mt-4 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
                data-testid="sign-out-button"
              >
                サインアウト
              </button>
            )}
          </>
        ) : (
          <h3>権限がありません。</h3>
        )}
      </div>
    </>
  );
};

// 型パラメータを削除し、キャストも不要
export default withAuthenticator(AuthWrapper);
