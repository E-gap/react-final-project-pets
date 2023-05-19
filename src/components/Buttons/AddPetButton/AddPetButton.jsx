//import PropTypes from 'prop-types';
import { IoAddOutline } from 'react-icons/io5';
import css from './AddPetButton.module.css';
import { NavLink } from 'react-router-dom';

const AddPetButton = ({ onClick, style }) => {
  return (
    <NavLink
      to="/add-pet"
      style={style}
      className={css.btn}
      type="button"
      onClick={onClick}
    >
      <p className={css.title}>Add Pet</p>
      {<IoAddOutline className={css.icon} />}
    </NavLink>
  );
};
export default AddPetButton;

/* AddPetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */
