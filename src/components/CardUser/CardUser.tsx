import { useIntl } from 'react-intl';

import { User } from 'models';
import './CardUser.scss';

interface Props {
  userData: User;
}

export const CardUser: React.FC<Props> = ({ userData }) => {
  const intl = useIntl();

  return (
    <div className="user">
      <img
        src={userData.userAvatar}
        alt={intl.formatMessage({ id: 'img.user-avatar-alt' })}
        className="user__avatar"
      />
      <span className="user__id"># {userData.id}</span>
      <span>{userData.username}</span>
    </div>
  );
};
