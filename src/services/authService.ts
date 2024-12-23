 import { AuthResponse } from '../types';

const authService = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    console.log(`Login attempt: ${username}:${password}`);
    // Mock service
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === '1234') {
          resolve({
            user: {
              id: 1,
              username: 'admin',
              email: 'admin@example.com',
              role: 'admin',
              createdAt: ''
            },
            token: 'mock-jwt-token'
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }
};

export default authService; 