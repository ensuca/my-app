export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
  }