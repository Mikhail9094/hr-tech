import { TOKEN_AUTH } from "@/constants/auth";
import { refreshAccessToken } from "@/sevices/service";
import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://api.escuelajs.co/graphql",
});

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorage.getItem(TOKEN_AUTH);

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, forward, operation }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED" && window.location.pathname !== "/") {
        refreshAccessToken().then(() => {
          const accessToken = localStorage.getItem(TOKEN_AUTH);

          operation.setContext(({ headers = {} }) => ({
            headers: {
              ...headers,
              Authorization: `Bearer ${accessToken}`,
            },
          }));

          return forward(operation);
        });
      }
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
