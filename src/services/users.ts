const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllUsers = () => {
  return fetch(`${baseURL}/users`).then((res) => res.json());
};
