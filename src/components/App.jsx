import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import MainPage from 'pages/MainPage/MainPage';
import Header from '../components/Header/Header';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AddPetForm = lazy(() => import('./AddPetForm/AddPetForm'));
const OurFriends = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/friends" element={<OurFriends />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route
              path="sell"
              element={<NoticesCategoriesList category="sell" />}
            />
            <Route
              path="lost-found"
              element={<NoticesCategoriesList category="lost-found" />}
            />
            <Route
              path="for-free"
              element={<NoticesCategoriesList category="for-free" />}
            />
            <Route
              path="favorite"
              element={<NoticesCategoriesList category="favorite" />}
            />
            <Route
              path="own"
              element={<NoticesCategoriesList category="own" />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path="/add-pet" element={<AddPetForm />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
