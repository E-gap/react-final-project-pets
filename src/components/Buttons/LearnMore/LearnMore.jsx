import PropTypes from 'prop-types';
import { IoPawOutline } from 'react-icons/io5';
import css from './LearnMore.module.css';

const LearnMore = ({
  id,
  onClick,
  favorite = false,
  big = true,
  selector = '',
}) => {
  return (
    <button
      id={id}
      className={
        favorite
          ? `${css.btn} ${css.btnFavorite} ${selector}`
          : `${css.btn} ${selector}`
      }
      type="button"
      style={{ width: big ? '248px' : 'auto' }}
      onClick={onClick}
    >
      <p className={css.title}>Learn more</p>
      {favorite && <IoPawOutline className={css.icon} />}
    </button>
  );
};
export default LearnMore;

LearnMore.propTypes = {
  favorite: PropTypes.bool,
  big: PropTypes.bool,
  onClick: PropTypes.func,
  selector: PropTypes.string,
};
