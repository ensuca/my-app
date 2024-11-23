import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};