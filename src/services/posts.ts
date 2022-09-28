import { ApiPost } from 'models';

const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllPosts = (): Promise<ApiPost[]> => {
  return fetch(`${baseURL}/posts`).then((res) => res.json());
};
