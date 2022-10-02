import { Loader } from 'components/Loader';
import { PostsList } from 'components/PostsList';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import './page.scss';

export const PostsPage = () => {
  const { loading, error, data } = useAppSelector((state) => state.posts);
  const { deletePost } = useActions();

  const deletePostHandler = (postId: number) => {
    deletePost(postId);
  };

  return (
    <div className="page">
      {loading && <Loader />}
      {error && <span>{error}</span>}
      {!loading && !error && (
        <>
          <h2 className="page__title">Posts page</h2>
          <PostsList posts={data} onDelete={deletePostHandler} />
        </>
      )}
    </div>
  );
};
