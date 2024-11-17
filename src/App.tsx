// App.tsx
import React from 'react';
import { Amplify } from 'aws-amplify';
import { I18n } from '@aws-amplify/core';
import { translations, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

// プロパティの型定義
interface AppProps {
  signOut?: () => void; // オプショナルに変更
  user?: {
    username: string;
  };
}

Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage('ja');

const App: React.FC<AppProps> = ({ signOut, user }) => {
  return (
    <div className="text-center bg-blue-500 text-white p-4 mt-4">
      <h1 className="text-3xl">Welcome to AnteKnowledge Journal</h1>
      {user ? (
        <>
          <h3>私は権限を持っています: {user.username}</h3>
          {signOut && (
            <button
              onClick={signOut}
              className="mt-4 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
            >
              サインアウト
            </button>
          )}
        </>
      ) : (
        <h3>権限がありません。</h3>
      )}
    </div>
  );
};

// App.tsx

export default withAuthenticator(App as React.ComponentType);

