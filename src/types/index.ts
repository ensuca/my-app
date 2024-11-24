export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
  }
  
  interface AuthResponse {
    user: User;
    token: string;
  }
  
  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
  }