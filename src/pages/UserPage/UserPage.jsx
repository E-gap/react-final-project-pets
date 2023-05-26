import css from './UserPage.module.css';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserData from '../../components/UserData/UserData';
import PetsData from '../../components/PetsData/PetsData';
import AddPetButton from '../../components/Buttons/AddPetButton/AddPetButton';
// import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
// import { useCallback } from 'react';
// import { clearIsNew } from '../../redux/auth/authOperations';

const UserPage = () => {
  const { isLogin } = useSelector(getAuth);
  // const dispatch = useDispatch();

  // const user = useSelector(getUser);

  // const handleCloseCongrats = useCallback(() => {
  //   dispatch(clearIsNew());
  // }, []);

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
        <div className={css.petsTabHeader}>
          <p className={css.tabsTitle}>My pets:</p>
          <AddPetButton
            style={{
              position: 'static',
              margin: 0,
            }}
          />
        </div>
        <PetsData />
      </div>

      {/* <ModalCongrats show={user && user.isNew} onClose={handleCloseCongrats} /> */}
    </section>
  );
};

export default UserPage;
