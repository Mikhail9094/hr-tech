import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const GET_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      name
      avatar
    }
  }
`;

interface ILoginState {
  error: string;
  loading: boolean;
  user: {
    id: string;
    name: string;
    avatar: string;
  } | null;
  getUser: () => void;
  clearUser: () => void;
}

export const useLoginStore = create<ILoginState>()(
  persist(
    (set) => ({
      error: "",
      loading: false,
      user: null,
      getUser: async () => {
        try {
          set(() => ({ loading: true }));
          const response = await client.query({
            query: GET_PROFILE,
          });

          if (!response.data?.myProfile) {
            set(() => ({ loading: false }));
          } else {
            set(() => ({ loading: false, user: response.data.myProfile }));
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          set(() => ({ error: error.message, loading: false, user: null }));
        }
      },
      clearUser: () => {
        set(() => ({ user: null }));
      },
    }),
    {
      name: "user",
    }
  )
);
