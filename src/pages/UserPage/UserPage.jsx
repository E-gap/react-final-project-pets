import css from './UserPage.module.css';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserData from '../../components/UserData/UserData';
import PetsData from '../../components/PetsData/PetsData';

const UserPage = () => {
  const { isLogin } = useSelector(getAuth);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={`container ${css.container}`}>
      <div className={`${css.tabContainer} ${css.myInformationTab}`}>
        <p className={css.tabsTitle}>My Information</p>
        <UserData />
      </div>

      <div className={`${css.tabContainer} ${css.myPetsTab}`}>
        <p className={css.tabsTitle}>My pets:</p>
        <PetsData />
      </div>
    </section>
  );
};

export default UserPage;
