import { ApiUser, User } from 'models';

const baseURL = 'https://jsonplaceholder.typicode.com';

const getAvatarURL = (seed: string) =>
  `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;

const addAvatarToUsers = (users: ApiUser[]): User[] =>
  users.map((user) => ({ ...user, userAvatar: getAvatarURL(user.username) }));

export const getAllUsers = (): Promise<User[]> => {
  return fetch(`${baseURL}/users`)
    .then((res): Promise<ApiUser[]> => res.json())
    .then((data) => addAvatarToUsers(data));
};
