import css from './UserInformationFormInput.module.css';
import edit from '../../images/UserPage/edit.svg';
import PropTypes from 'prop-types';
import UserInformationForm from '../UserInformationForm/UserInformationForm';

const UserInformationFormInput = ({id, value = "", onChange}) => {
  return (
    <div className={css.container}>
      <input type='text' className={css.input} id={id} value={value} onChange={(e) => onChange && onChange(e)}/>
      <img className={css.editIcon} src={edit} alt='Edit icon' width={24} height={24}/>
    </div>
  );
};

UserInformationForm.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default UserInformationFormInput;

