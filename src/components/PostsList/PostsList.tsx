import { CardPost } from 'components/CardPost';
import { Post } from 'models';
import './PostsList.scss';

interface Props {
  posts: Post[];
  onDelete: (postId: number) => void;
}

export const PostsList: React.FC<Props> = ({ posts, onDelete }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <CardPost key={post.id} postData={post} onDelete={onDelete} />
      ))}
    </ul>
  );
};
