import { User } from 'models';

import { CardUser } from '../CardUser';
import './UsersList.scss';

interface Props {
  users: User[];
}

export const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <CardUser key={user.id} userData={user} />
      ))}
    </ul>
  );
};
