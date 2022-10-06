import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import './page.scss';
import pageNotFoundImg from 'assets/img/page-not-found.png';

export const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <div className="page page--content-centered">
      <h2>
        <FormattedMessage id="not-found-page.title" />
      </h2>
      <img
        src={pageNotFoundImg}
        alt={intl.formatMessage({ id: 'img.not-found-alt' })}
        className="not-found-img"
      />
      <p>
        <FormattedMessage id="not-found-page.text" />
      </p>
      <Link to="/" className="go-back-link">
        <FormattedMessage id="not-found-page.link" />
      </Link>
    </div>
  );
};
