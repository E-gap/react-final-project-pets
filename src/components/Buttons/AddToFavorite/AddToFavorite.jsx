import PropTypes from 'prop-types';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import css from './AddToFavorite.module.css';

const AddToFavorite = ({ onClick, favorite = false, selector = '', style }) => {
  return (
    <button
      style={style}
      // className={className}
      className={
        favorite
          ? `${css.btn} ${css.btnFavorite} ${selector}`
          : `${css.btn} ${selector}`
      }
      type="button"
      onClick={onClick}
    >
      {!favorite && <IoHeartOutline className={css.icon} />}
      {favorite && <IoHeart className={css.icon} />}
    </button>
  );
};
export default AddToFavorite;

AddToFavorite.propTypes = {
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
  selector: PropTypes.string,
};
