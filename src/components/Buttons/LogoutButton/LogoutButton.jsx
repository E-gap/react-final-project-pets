import css from './LogoutButton.module.css';
import PropTypes from 'prop-types';
import logout from '../../../images/UserPage/logout.svg';

const LogoutButton = ({ onLogout }) => {
  return (
    <button onClick={onLogout} className={css.logoutButton} type="submit">
      <img src={logout} alt="" width={24} height={24} />
      Log Out
    </button>
  );
};

export default LogoutButton;

LogoutButton.propTypes = {
  onClick: PropTypes.func,
};
