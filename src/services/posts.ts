import { ApiPost, Post, User } from 'models';
import { delay } from 'utils/delay';

const baseURL = 'http://jsonplaceholder.typicode.com';

export const getAllPosts = async (): Promise<ApiPost[]> => {
  /// Force a delay to simulate slow loading time and show spinner
  await delay(2000);
  ///
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

export const editPost = (
  postId: number,
  postTitle: string,
  postBody: string
): Promise<ApiPost> => {
  return fetch(`${baseURL}/posts/${postId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: postTitle,
      body: postBody
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((res) => res.json());
};

export const deletePost = (postId: number): void => {
  fetch(`${baseURL}/posts/${postId}`, {
    method: 'DELETE'
  }).then(() => '');
};
