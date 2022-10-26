import { useQuery } from 'react-query';

import { searchUserRepos } from '../../api';

const handleSearchUser = (searchUser: string) => async () => {
  return await searchUserRepos(searchUser);
};

export const useBenificiarysQuery = (searchUser: string) => {
  return useQuery(['searchUserRepos', searchUser], handleSearchUser(searchUser), {
    select: ({ data }) => data || [],
    enabled: !!searchUser,
    refetchOnMount: false,
  });
};
