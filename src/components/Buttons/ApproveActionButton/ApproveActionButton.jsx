import PropTypes from 'prop-types';
import { IoTrashOutline } from 'react-icons/io5';
import css from './ApproveActionButton.module.css';

const ApproveActionButton = ({ onClick, favorite = true, selector = '' }) => {
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
export default ApproveActionButton;

ApproveActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  favorite: PropTypes.bool,
  selector: PropTypes.string,
};
