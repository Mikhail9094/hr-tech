import { gql, useQuery } from "@apollo/client";

const GET_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      name
    }
  }
`;
interface IProfileData {
  myProfile: {
    id: string;
    name: string;
  };
}

export function useAuth() {
  const { data, loading, error } = useQuery<IProfileData>(GET_PROFILE);

  const isAuth = !!data;

  return { isAuth, loading, error };
}
