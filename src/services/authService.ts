const authService = {
    login: async (username: string, password: string): Promise<AuthResponse> => {
      // Mock service
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin' && password === '1234') {
            resolve({
              user: {
                id: 1,
                username: 'admin',
                email: 'admin@example.com',
                role: 'admin'
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