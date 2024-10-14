import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { toast } from "@/hooks/use-toast";
import { TOKEN_AUTH } from "@/constants/auth";
import { useLoginStore } from "@/store/store";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;

export const signIn = async (email: string, password: string) => {
  const { getUser } = useLoginStore.getState();
  try {
    const response = await client.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });

    const { access_token, refresh_token } = response.data.login;
    localStorage.setItem(TOKEN_AUTH, access_token);
    document.cookie = `refreshToken=${refresh_token}; path=/`;
    getUser();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Error",
      description: error.message,
    });
  }
};

export const refreshAccessToken = async () => {
  const { getUser } = useLoginStore.getState();
  const cookies = document.cookie.split(";");
  const refreshTokenCookie = cookies.find((cookie) => cookie.trim().startsWith("refreshToken="));
  const refreshToken = refreshTokenCookie?.split("=")[1];

  try {
    const result = await client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { refreshToken },
    });

    const { access_token, refresh_token } = result.data.refreshToken;
    localStorage.setItem(TOKEN_AUTH, access_token);
    document.cookie = `refreshToken=${refresh_token}; path=/`;
    getUser();
  } catch (error) {
    console.log("error", error);
  }
};
