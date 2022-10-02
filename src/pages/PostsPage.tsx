import { PostsList } from 'components/PostsList';
import { useAppSelector } from 'hooks/useAppSelector';
import './page.scss';

export const PostsPage = () => {
  const { loading, error, data } = useAppSelector((state) => state.posts);

  return (
    <div className="page">
      <h2 className="page__title">Posts page</h2>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {!loading && !error && <PostsList posts={data} />}
    </div>
  );
};
