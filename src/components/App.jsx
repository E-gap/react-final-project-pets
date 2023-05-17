import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

import SharedLayout from './SharedLayout/SharedLayout';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AddPetForm = lazy(() => import('./AddPetForm/AddPetForm'));
const OurFriends = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const User = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<NotFound />} />
              <Route path="friends" element={<OurFriends />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="notices" element={<NoticesPage />}>
                <Route path="sell" element={NoticesCategoriesList} />
                <Route path="lost-found" element={NoticesCategoriesList} />
                <Route path="for-free" element={NoticesCategoriesList} />
                <Route path="favorite" element={NoticesCategoriesList} />
                <Route path="own" element={NoticesCategoriesList} />
              </Route>
              <Route path="add-pet" element={<AddPetForm />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="user" element={<User />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
