import css from './UserInformationForm.module.css';
import UserInformationFormInput from '../UserInformationFormInput/UserInformationFormInput';
import PropTypes from 'prop-types';

const UserInformationForm = ({className = ""}) => {

  return (
    <div className={`${css.container} ${className}`}>
      <form action='src/components/UserInformation/UserInformationForm' className={css.form}>
        <label className={css.label} htmlFor="name">Name:</label>
        <UserInformationFormInput id="name"/>

        <label className={css.label} htmlFor="email">Email:</label>
        <UserInformationFormInput id="email"/>


        <label className={css.label} htmlFor="birthday">Birthday:</label>
        <UserInformationFormInput id="birthday"/>


        <label className={css.label} htmlFor="phone">Phone:</label>
        <UserInformationFormInput id="phone"/>


        <label className={css.label} htmlFor="city">City:</label>
        <UserInformationFormInput id="city"/>
      </form>
    </div>
  );
};

UserInformationForm.propTypes = {
  className: PropTypes.string,
}


export default UserInformationForm;

