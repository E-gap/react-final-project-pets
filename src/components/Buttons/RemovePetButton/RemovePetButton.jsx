import PropTypes from 'prop-types';
import { IoTrashOutline, IoTrash } from 'react-icons/io5';
import css from './RemovePetButton.module.css';

const RemovePetButton = ({ onClick, favorite = false, selector = '' }) => {
  return (
    <button
      className={
        favorite
          ? `${css.btn} ${css.btnFavorite} ${selector}`
          : `${css.btn} ${selector}`
      }
      type="button"
      onClick={onClick}
    >
      {!favorite && <IoTrashOutline className={css.icon} />}
      {favorite && <IoTrash className={css.icon} />}
    </button>
  );
};
export default RemovePetButton;

RemovePetButton.propTypes = {
  favorite: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  selector: PropTypes.string,
};
