import PropTypes from 'prop-types';
import { IoAddOutline } from 'react-icons/io5';
import css from './AddPetButton.module.css';

const AddPetButton = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      <p className={css.title}>Add Pet</p>
      {<IoAddOutline className={css.icon} />}
    </button>
  );
};
export default AddPetButton;

AddPetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
