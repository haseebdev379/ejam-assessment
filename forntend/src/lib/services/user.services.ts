import axios from '@/lib/config/axios.config';

export const getUsers = (searchTerm: string, pageNo: number, limit: number) => {
  return axios.get('/users/search', {
    params: {
      q: searchTerm,
      skip: (pageNo - 1) * limit,
      limit,
    },
  });
};
