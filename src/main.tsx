// main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import App from './App'; // 修正は不要

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* プロパティを渡さなくてOK */}
  </React.StrictMode>
);
