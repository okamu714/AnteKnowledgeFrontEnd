import React from 'react';
import AuthWrapper from './components/AuthWrapper';
import EBooks from './components/EBooks';
import Navber from './components/Navber';
import Home from './components/Home';
import Blog from './components/Blog';
import IntroCodes from './components/IntroCodes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MyPage from './components/MyPage';
import { AuthProvider } from './context/AuthContext';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import PurchaseSuccess from './components/PurchaseSuccess';
import ProductDetail from './components/ProductDetail';
import Template from './components/Template';
import ScrollToTop from './components/ScrollTop';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Authenticator.Provider>
        <Router>
          <Navber />
          <ScrollToTop /> {/* ScrollToTopをRoutesの前に配置 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/login" element={<AuthWrapper />} />
            <Route
              path="/mypage"
              element={<ProtectedRoute component={MyPage} />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ebook" element={<EBooks />} />
            <Route path="/introCodes" element={<IntroCodes />} />
            <Route path="/succes" element={<PurchaseSuccess />} />
            <Route path="/cancel" element={<EBooks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/ebook/:productId" element={<ProductDetail />} />
            <Route path="/blog/:productId" element={<BlogDetail />} />
            {/* 不明なパスはホームにリダイレクト */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Router>
      </Authenticator.Provider>
    </AuthProvider>
  );
};

const ProtectedRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const { user } = useAuthenticator((context) => [context.user]);
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
