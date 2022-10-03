import { useIntl } from 'react-intl';

import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';
import { Post } from 'models';
import './CardPost.scss';

interface Props {
  postData: Post;
  onDelete: (postId: number) => void;
  onEdit: (post: Post) => void;
}

export const CardPost: React.FC<Props> = ({ postData, onDelete, onEdit }) => {
  const intl = useIntl();

  return (
    <div className="post">
      <div className="post__user-details">
        <img
          src={postData.userAvatar}
          alt={intl.formatMessage({ id: 'img.user-avatar-alt' })}
          className="post__avatar"
        />
        <span className="post__username">{postData.username}</span>
      </div>
      <div className="post__content">
        <div className="post__flex-wrapper">
          <span className="post__id"># {postData.id}</span>
          <div className="post__icons-container">
            <button onClick={() => onEdit(postData)}>
              <img
                className="post__icon"
                src={editIcon}
                alt={intl.formatMessage({ id: 'icon.edit-alt' })}
                title={intl.formatMessage({ id: 'icon.edit-title' })}
              />
            </button>
            <button onClick={() => onDelete(postData.id)}>
              <img
                className="post__icon"
                src={deleteIcon}
                alt={intl.formatMessage({ id: 'icon.delete-alt' })}
                title={intl.formatMessage({ id: 'icon.delete-title' })}
              />
            </button>
          </div>
        </div>
        <h3 className="post__title">{postData.title}</h3>
        <p className="post__body">{postData.body}</p>
      </div>
    </div>
  );
};
