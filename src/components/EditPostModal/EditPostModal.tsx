import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Post } from 'models';

import './EditPostModal.scss';

interface Props {
  container: HTMLElement;
  post: Post;
}

export const EditPostModal: React.FC<Props> = ({ container, post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return createPortal(
    <div className="edit-modal">
      <div className="edit-modal__box">
        <textarea
          className="edit-modal__input"
          value={title}
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          className="edit-modal__input"
          value={body}
          onInput={(e) => setBody(e.currentTarget.value)}
        />
      </div>
    </div>,
    container
  );
};
