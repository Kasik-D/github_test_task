import axios from 'axios';
import create from 'zustand';

import { DOMAIN_URL } from '../constants';
import { breakpoints } from './breakpoints';

export const useErrorsStore = create(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));

const MyAppClient = axios.create({
  baseURL: DOMAIN_URL,
});

MyAppClient.interceptors.response.use(
  (response) => {
    if (response.data.ErrorCode !== 0) {
      useErrorsStore.setState({
        hasError: true,
        error: response.data.ErrorMessage,
        date: Date.now(),
      });
    }
    return response;
  },
  (error) => {
    useErrorsStore.setState({
      hasError: true,
      error: error,
      date: Date.now(),
    });
    return Promise.reject(error);
  },
);

export const searchUserRepos = async (searchUser) =>
  await MyAppClient.get(breakpoints.searchUserRepos(searchUser));

export { MyAppClient };
