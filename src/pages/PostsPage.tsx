import { useState } from 'react';

import { Loader } from 'components/Loader';
import { PostsList } from 'components/PostsList';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { Post } from 'models';

import { EditPostModal } from '../components/EditPostModal/EditPostModal';

import './page.scss';

export const PostsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { loading, error, data } = useAppSelector((state) => state.posts);
  const { deletePost } = useActions();

  const deletePostHandler = (postId: number) => {
    deletePost(postId);
  };

  const editPostHandler = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  return (
    <div
      className={`page ${isModalOpen && 'page--no-overflow'}`}
      id="posts-page">
      {loading && <Loader />}
      {error && <span>{error}</span>}
      {!loading && !error && (
        <>
          <h2 className="page__title">Posts page</h2>
          <PostsList
            posts={data}
            onDelete={deletePostHandler}
            onEdit={editPostHandler}
          />
        </>
      )}
      {isModalOpen && editingPost && (
        <EditPostModal
          container={document.getElementById('posts-page') as HTMLElement}
          post={editingPost}
        />
      )}
    </div>
  );
};
