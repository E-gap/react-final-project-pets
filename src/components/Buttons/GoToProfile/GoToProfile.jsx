import PropTypes from 'prop-types';
import { IoPawOutline } from 'react-icons/io5';
import css from './GoToProfile.module.css';

const GoToProfile = ({
  onClick,
  favorite = true,
  big = true,
  selector = '',
}) => {
  return (
    <button
      className={
        favorite
          ? `${css.btn} ${css.btnFavorite} ${selector}`
          : `${css.btn} ${selector}`
      }
      type="button"
      style={{ width: big ? '248px' : 'auto' }}
      onClick={onClick}
    >
      <p className={css.title}>Go to profile</p>
      {favorite && <IoPawOutline className={css.icon} />}
    </button>
  );
};
export default GoToProfile;

GoToProfile.propTypes = {
  onClick: PropTypes.func.isRequired,
};
