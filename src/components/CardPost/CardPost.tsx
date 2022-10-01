import { Post } from 'models';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';
import './CardPost.scss';

interface Props {
  postData: Post;
}

export const CardPost: React.FC<Props> = ({ postData }) => {
  return (
    <div className="post">
      <div className="post__user-details">
        <img
          src={postData.userAvatar}
          alt="User avatar"
          className="post__avatar"
        />
        <span className="post__username">{postData.username}</span>
      </div>
      <div className="post__content">
        <div className="post__flex-wrapper">
          <span className="post__id"># {postData.id}</span>
          <div className="post__icons-container">
            <button>
              <img
                className="post__icon"
                src={editIcon}
                alt="Down arrow icon"
              />
            </button>
            <button>
              <img
                className="post__icon"
                src={deleteIcon}
                alt="Down arrow icon"
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
