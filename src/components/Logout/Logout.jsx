import LogoutButton from "components/Buttons/LogoutButton/LogoutButton";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';

const Logout = () => {

    const dispatch = useDispatch();
    const onLogout = () => {
      dispatch(logout());
    };

  return (
    <>
       <LogoutButton onLogout={onLogout} />
    </>
  );
};

export default Logout;
