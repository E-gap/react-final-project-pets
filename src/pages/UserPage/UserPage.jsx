import css from './UserPage.module.css';
import UserInformation from '../../components/UserInformation/UserInformation';
import MyPetsItem from '../../components/MyPetsItem/MyPetsItem';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
const UserPage = () => {
  const { isLogin, token } = useSelector(getAuth);
  console.log(isLogin, token);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <section className={`container ${css.container}`}>
      <div className={`${css.tabContainer} ${css.myInformationTab}`}>
        <p className={css.tabsTitle}>My Information</p>
        <UserInformation />
      </div>
      <div className={`${css.tabContainer}`}>
        <p className={css.tabsTitle}>My pets:</p>

        <MyPetsItem />
        <MyPetsItem />
        <MyPetsItem />
      </div>
    </section>
  );
};

export default UserPage;
