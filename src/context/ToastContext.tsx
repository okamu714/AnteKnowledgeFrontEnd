// context/ToastContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextProps {
  showToast: boolean;
  setShowToast: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <ToastContext.Provider
      value={{ showToast, setShowToast, message, setMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
