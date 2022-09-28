import { ApiPost } from '../api/api';

export interface Post extends ApiPost {
  username: string;
  userAvatar: string;
}
