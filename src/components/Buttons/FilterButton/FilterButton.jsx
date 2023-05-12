import PropTypes from 'prop-types';
import { CiFilter } from 'react-icons/ci';
import css from './FilterButton.module.css';
const FilterButton = ({ isActive, onClick, selector = '' }) => {
  return (
    <button
      type="button"
      className={
        isActive
          ? `${css.btn} ${css.active} ${selector}`
          : `${css.btn} ${selector}`
      }
      onClick={onClick}
    >
      Filter
      <CiFilter className={css.icon} />
    </button>
  );
};
export default FilterButton;
FilterButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  selector: PropTypes.string,
};
