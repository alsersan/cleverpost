import './Loader.scss';
import { useIntl } from 'react-intl';

import spinnerLogo from 'assets/img/logo.svg';

export const Loader = () => {
  const intl = useIntl();

  return (
    <div className="loader">
      <img
        src={spinnerLogo}
        alt={intl.formatMessage({ id: 'img.spinner-alt' })}
        className="loader__spinner"
      />
    </div>
  );
};
