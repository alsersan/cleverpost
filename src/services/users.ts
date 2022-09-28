import { ApiUser } from 'models';

const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllUsers = (): Promise<ApiUser[]> => {
  return fetch(`${baseURL}/users`).then((res) => res.json());
};
