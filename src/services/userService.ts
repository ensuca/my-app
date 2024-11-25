import { User } from '../types';

const mockUsers: User[] = [
    {
      id: 1,
      username: "ahmet_aht",
      email: "ahmet@example.com",
      role: "Admin",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      username: "ayse_ayse",
      email: "ayse@example.com",
      role: "User",
      createdAt: "2024-02-01"
    }
  ];
  
  export const userService = {
    getUsers: async (): Promise<User[]> => {
      // Mock API çağrısı
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...mockUsers]);
        }, 1000);
      });
    },
  
    addUser: async (userData: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
      // Mock API çağrısı
      return new Promise((resolve) => {
        setTimeout(() => {
          const newUser: User = {
            ...userData,
            id: mockUsers.length + 1,
            createdAt: new Date().toISOString().split('T')[0]
          };
          mockUsers.splice(mockUsers.length, 0, newUser);
          resolve(newUser);
        }, 1000);
      });
    }
  };