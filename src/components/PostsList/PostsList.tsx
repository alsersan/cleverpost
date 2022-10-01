import { Post } from 'models';
import { CardPost } from 'components/CardPost';
import './PostsList.scss';

interface Props {
  posts: Post[];
}

export const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <CardPost key={post.id} postData={post} />
      ))}
    </ul>
  );
};
