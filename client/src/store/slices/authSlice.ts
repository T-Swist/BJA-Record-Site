import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Admin {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  admin: Admin | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  admin: localStorage.getItem('admin_user')
    ? JSON.parse(localStorage.getItem('admin_user')!)
    : null,
  token: localStorage.getItem('admin_token') || null,
  isAuthenticated: !!localStorage.getItem('admin_token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ admin: Admin; token: string }>) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('admin_token', action.payload.token);
      localStorage.setItem('admin_user', JSON.stringify(action.payload.admin));
    },
    logout: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
