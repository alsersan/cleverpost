import { User } from 'models';
import './CardUser.scss';

interface Props {
  userData: User;
}

export const CardUser: React.FC<Props> = ({ userData }) => {
  return (
    <div className="user">
      <img
        src={userData.userAvatar}
        alt="User avatar"
        className="user__avatar"
      />
      <span>{userData.username}</span>
    </div>
  );
};
