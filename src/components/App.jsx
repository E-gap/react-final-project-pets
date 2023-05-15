import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));

//const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<NotFound />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route path="sell" element={NoticesCategoriesList} />
              <Route path="lost-found" element={NoticesCategoriesList} />
              <Route path="for-free" element={NoticesCategoriesList} />
              <Route path="favorite" element={NoticesCategoriesList} />
              <Route path="own" element={NoticesCategoriesList} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
