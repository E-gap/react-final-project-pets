import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import propTypes from 'prop-types';

import css from './tempAddToFavorite.module.css';

const AddToFavorite = ({ onClick, favorite = false, selector = '' }) => {
  return (
    // <button className={css.button}>Add to <IoHeartOutline className={css.icon}/></button>
    <button
      className={
        favorite
          ? `${css.btn} ${css.btnFavorite} ${selector}`
          : `${css.btn} ${selector}`
      }
      type="button"
      onClick={onClick}
    >
      Add to
      {!favorite && <IoHeartOutline className={css.icon} />}
      {favorite && <IoHeart className={css.icon} />}
    </button>
  );
};

export default AddToFavorite;

AddToFavorite.propTypes = {
  favorite: propTypes.bool,
  onClick: propTypes.func.isRequired,
  selector: propTypes.string,
};
