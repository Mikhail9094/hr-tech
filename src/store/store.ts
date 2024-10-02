import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ILoginState {
  accessToken: string | null;
  refreshToken: string | null;
  saveTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useLoginStore = create<ILoginState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      saveTokens: (accessToken: string, refreshToken: string) => set({ accessToken, refreshToken }),
      clearTokens: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: "login",
    }
  )
);
