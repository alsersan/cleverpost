import { FormattedMessage } from 'react-intl';

import { ErrorComponent } from 'components/ErrorComponent';
import { Loader } from 'components/Loader';
import { UsersList } from 'components/UsersList';
import { useAppSelector } from 'hooks/useAppSelector';
import './page.scss';

export const UsersPage = () => {
  const { loading, error, data } = useAppSelector((state) => state.users);

  return (
    <div className="page">
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <>
          <h2 className="page__title">
            <FormattedMessage id="users-page.title" />
          </h2>
          <UsersList users={data} />
        </>
      )}
    </div>
  );
};
