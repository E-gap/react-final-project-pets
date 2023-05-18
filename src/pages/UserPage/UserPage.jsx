import css from './UserPage.module.css';
import UserInformation from '../../components/UserInformation/UserInformation';
import MyPetsItem from '../../components/MyPetsItem/MyPetsItem';

const UserPage = () => {
  return (
    <div className={`container ${css.container}`}>
      <div className={`${css.tabContainer} ${css.myInformationTab}`}>
        <p className={css.tabsTitle}>
          My Information
        </p>
        <UserInformation />
      </div>
      <div className={`${css.tabContainer}`}>
        <p className={css.tabsTitle}>
          My pets:
        </p>

        <MyPetsItem />
        <MyPetsItem />
        <MyPetsItem />
      </div>
    </div>
  );
};

export default UserPage;
