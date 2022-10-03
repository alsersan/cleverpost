import './Loader.scss';
import { useIntl } from 'react-intl';

import spinnerLogo from 'assets/img/spinner.png';

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
