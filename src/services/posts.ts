import { ApiPost, Post, User } from 'models';

const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllPosts = (): Promise<ApiPost[]> => {
  return fetch(`${baseURL}/posts`).then((res) => res.json());
};

export const processPosts = (posts: ApiPost[], users: User[]): Post[] => {
  const usersMapping: {
    [key: number]: { username: string; userAvatar: string };
  } = {};
  users.forEach((user) => {
    usersMapping[user.id] = {
      username: user.username,
      userAvatar: user.userAvatar
    };
  });
  return posts.map((post) => ({ ...post, ...usersMapping[post.userId] }));
};
