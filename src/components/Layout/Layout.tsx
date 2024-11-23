import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

// Store'a user reducer'ı eklemeyi unutmayın (store.ts):
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../store/authSlice';
import userReducer from '../../store/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer
  }
});