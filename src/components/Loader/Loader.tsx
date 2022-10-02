import './Loader.scss';
import spinnerLogo from 'assets/img/spinner.png';

export const Loader = () => {
  return (
    <div className="loader">
      <img
        src={spinnerLogo}
        alt="Loading spinner"
        className="loader__spinner"
      />
    </div>
  );
};
