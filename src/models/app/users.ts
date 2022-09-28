import { ApiUser } from '../api/api';

export interface User extends ApiUser {
  userAvatar: string;
}
