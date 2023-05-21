import css from './UserPage.module.css';
import UserData from '../../components/UserData/UserData';
import PetsData from '../../components/PetsData/PetsData';

const UserPage = () => {
  return (
    <section className={`container ${css.container}`}>
      <div className={`${css.tabContainer} ${css.myInformationTab}`}>
        <p className={css.tabsTitle}>
          My Information
        </p>
        <UserData/>
      </div>

      <div className={`${css.tabContainer}`}>
        <p className={css.tabsTitle}>
          My pets:
        </p>
        <PetsData />
      </div>
    </section>
  );
};

export default UserPage;
