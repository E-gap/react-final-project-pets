import PropTypes from 'prop-types';
import css from './RemovePetButton.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const RemovePetButton = ({ onClick }) => {
  return (
    <button
      // className={className}
      className={css.btn}
      type="button"
      onClick={onClick}
    >
      <RiDeleteBin6Line className={css.icon} />
    </button>
  );
};
export default RemovePetButton;

RemovePetButton.propTypes = {
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
  selector: PropTypes.string,
};
