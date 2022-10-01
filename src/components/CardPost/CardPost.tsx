import { Post } from 'models';
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
        <h3 className="post__title">{postData.title}</h3>
        <p className="post__body">{postData.body}</p>
      </div>
    </div>
  );
};
