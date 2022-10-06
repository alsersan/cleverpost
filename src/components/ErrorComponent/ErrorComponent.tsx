import { FormattedMessage } from 'react-intl';
import './ErrorComponent.scss';

export const ErrorComponent = () => {
  return (
    <div className="error-view">
      <h2>
        <FormattedMessage id="error.title" />
      </h2>
      <p>
        <FormattedMessage id="error.message" />
      </p>
    </div>
  );
};
