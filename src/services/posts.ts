const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllPosts = () => {
  return fetch(`${baseURL}/posts`).then((res) => res.json());
};
