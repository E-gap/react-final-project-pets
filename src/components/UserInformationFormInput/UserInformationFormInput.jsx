import css from './UserInformationFormInput.module.css';
import edit from '../../images/UserPage/edit.svg';

const UserInformationFormInput = ({id, value, onChange}) => {
  return (
    <div className={css.container}>
      <input type='text' className={css.input} id={id} value={value} onChange={onChange}/>
      <img className={css.editIcon} src={edit} alt='Edit icon' width={24} height={24}/>
    </div>
  );
};

export default UserInformationFormInput;

