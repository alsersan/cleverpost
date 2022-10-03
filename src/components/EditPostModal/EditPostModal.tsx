import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Post } from 'models';

import './EditPostModal.scss';

interface Props {
  container: HTMLElement;
  post: Post;
  onClose: (editedContent?: {
    post: Post;
    newTitle: string;
    newBody: string;
  }) => void;
}

export const EditPostModal: React.FC<Props> = ({
  container,
  post,
  onClose
}) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return createPortal(
    <div className="edit-modal" onClick={() => onClose()}>
      <div className="edit-modal__box" onClick={(e) => e.stopPropagation()}>
        <h4 className="edit-modal__title">Edit Post</h4>
        <span className="edit-modal__info">
          Editing post # {post.id} from user {post.username} (userId:{' '}
          {post.userId})
        </span>
        <div className="modal-input-group modal-input-group--small">
          <label className="modal-input-group__label" htmlFor="edit-post-title">
            Edit title
          </label>
          <textarea
            id="edit-post-title"
            className="modal-input-group__textarea"
            value={title}
            onInput={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className="modal-input-group modal-input-group--large">
          <label className="modal-input-group__label" htmlFor="edit-post-title">
            Edit body
          </label>
          <textarea
            id="edit-post-body"
            className="modal-input-group__textarea"
            value={body}
            onInput={(e) => setBody(e.currentTarget.value)}
          />
        </div>
        <div className="modal-btn-group">
          <button
            className="modal-btn-group__btn modal-btn-group__btn--secondary"
            onClick={() => onClose()}>
            Cancel
          </button>
          <button
            className="modal-btn-group__btn modal-btn-group__btn--primary"
            onClick={() => onClose({ post, newTitle: title, newBody: body })}>
            Submit
          </button>
        </div>
      </div>
    </div>,
    container
  );
};
