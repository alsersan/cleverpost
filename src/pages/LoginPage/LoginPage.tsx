import './LoginPage.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage, useIntl } from 'react-intl';

import companyLogo from 'assets/img/logo.svg';

export const LoginPage = () => {
  const intl = useIntl();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-page">
      <div className="login-page__content-wrapper">
        <img
          src={companyLogo}
          alt={intl.formatMessage({ id: 'img.company-logo-alt' })}
          className="login-page__logo"
        />
        <h2 className="login-page__title">
          <FormattedMessage id="login-page.title" />
        </h2>
        <span>
          {' '}
          <FormattedMessage id="login-page.text" />
        </span>
        <button onClick={() => loginWithRedirect()} className="login-page__btn">
          <FormattedMessage id="login-page.btn" />
        </button>
      </div>
      <div className="login-page__square login-page__square--left"></div>
      <div className="login-page__square login-page__square--right"></div>
    </div>
  );
};
