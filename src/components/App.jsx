import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

//const Register = lazy(() => import('../pages/Register/Register'));
//const Login = lazy(() => import('../pages/Login/Login'));
//const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<NotFound />} />
          <Route path="register" element={<NotFound />} />

          <Route path="contacts" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
