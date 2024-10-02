import { gql, useQuery } from "@apollo/client";

const GET_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      name
      avatar
    }
  }
`;
interface IProfileData {
  myProfile: {
    id: string;
    name: string;
    avatar: string;
  };
}

export function useProfile() {
  const { data: profile, loading, error } = useQuery<IProfileData>(GET_PROFILE);
  return { profile, loading, error };
}
