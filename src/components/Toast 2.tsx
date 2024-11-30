// components/Toast.tsx
import React, { useEffect } from 'react';
import { useToast } from '../context/ToastContext';

const Toast: React.FC = () => {
  const { showToast, setShowToast, message } = useToast();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // 3秒後に非表示
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (!showToast) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg transition-transform transform duration-300">
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default Toast;
