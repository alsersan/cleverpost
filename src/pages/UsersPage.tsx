import { Loader } from 'components/Loader';
import { UsersList } from 'components/UsersList';
import { useAppSelector } from 'hooks/useAppSelector';
import './page.scss';

export const UsersPage = () => {
  const { loading, error, data } = useAppSelector((state) => state.users);

  return (
    <div className="page">
      {loading && <Loader />}
      {error && <span>{error}</span>}
      {!loading && !error && (
        <>
          <h2 className="page__title">Users page</h2>
          <UsersList users={data} />
        </>
      )}
    </div>
  );
};
