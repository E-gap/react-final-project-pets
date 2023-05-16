import PropTypes from 'prop-types';
import { IoTrashOutline } from 'react-icons/io5';
import css from './ApproveActiontButton.module.css';

const ApproveActiontButton = ({
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
      style={{ width: 'auto' }}
      onClick={onClick}
    >
      <p className={css.title}>Yes</p>
      {favorite && <IoTrashOutline className={css.icon} />}
    </button>
  );
};
export default ApproveActiontButton;

ApproveActiontButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
