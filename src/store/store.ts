import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ILoginState {
  accessToken: string;
  refreshToken: string;
  saveTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useLoginStore = create<ILoginState>()(
  persist(
    (set) => ({
      accessToken: "",
      refreshToken: "",
      saveTokens: (accessToken: string, refreshToken: string) => set({ accessToken, refreshToken }),
      clearTokens: () => set({ accessToken: "", refreshToken: "" }),
    }),
    {
      name: "login",
    }
  )
);
