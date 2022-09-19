import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Load page...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
