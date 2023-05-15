import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';


const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
//const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AddPetForm = lazy(() => import('./AddPetForm/AddPetForm'));
const OurFriends = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<NotFound />} />
            <Route path="friends" element={<OurFriends />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="add-pet" element={<AddPetForm />} />
            <Route path="Find pet" element={<NoticesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
