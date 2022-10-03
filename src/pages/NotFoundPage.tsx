import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="page">
      <h2>Page not found</h2>
      <p>We're sorry, the page you requested could not be found.</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};
