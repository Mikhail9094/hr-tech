import { useLoginStore } from "@/store/store";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { toast } from "@/hooks/use-toast";

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
  const { saveTokens } = useLoginStore.getState();
  try {
    const response = await client.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });

    const { access_token, refresh_token } = response.data.login;
    saveTokens(access_token, refresh_token);
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
  const { refreshToken, saveTokens } = useLoginStore.getState();
  try {
    const result = await client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { refreshToken },
    });

    const { access_token, refresh_token } = result.data.refreshToken;
    saveTokens(access_token, refresh_token);
  } catch (error) {
    console.log("error", error);
  }
};
