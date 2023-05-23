import PropTypes from 'prop-types';
import { IoAddOutline } from 'react-icons/io5';
import css from './AddPetButton.module.css';
import { NavLink } from 'react-router-dom';
import { getAuth } from '../../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

const AddPetButton = ({ onClick, style }) => {
  const { isLogin } = useSelector(getAuth);
  return (
    <>
      {isLogin ? (
        <NavLink to="/add-pet" style={style} className={css.btn} type="button">
          <p className={css.title}>Add Pet</p>
          {<IoAddOutline className={css.icon} />}
        </NavLink>
      ) : (
        <button
          style={style}
          className={css.btn}
          type="button"
          onClick={onClick}
        >
          <p className={css.title}>Add Pet</p>
          {<IoAddOutline className={css.icon} />}
        </button>
      )}
    </>
  );
};
export default AddPetButton;

AddPetButton.propTypes = {
  onClick: PropTypes.func,
};
