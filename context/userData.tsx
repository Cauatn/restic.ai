import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface IUserTokenPayload {
  iss: string;
  sub: string;
  id: number;
  role: string;
}

interface TokenState {
  token: string | null;
  issuer: string | null;
  subject: string | null;
  userId: number | null;
  userRole: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  token: null,
  issuer: null,
  subject: null,
  userId: null,
  userRole: null,
  setToken: (token) => {
    try {
      const decoded = jwtDecode<IUserTokenPayload>(token);
      set({
        token,
        issuer: decoded.iss,
        subject: decoded.sub,
        userId: decoded.id,
        userRole: decoded.role,
      });
    } catch (error) {
      console.error("Failed to decode JWT token", error);
    }
  },
  clearToken: () =>
    set({
      token: null,
      issuer: null,
      subject: null,
      userId: null,
      userRole: null,
    }),
}));
