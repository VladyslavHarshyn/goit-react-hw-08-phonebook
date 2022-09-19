import UserRoutes from './components/UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/contacts/auth/authOperations';

import Navbar from './components/Navbar/Navbar';

import s from './app.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;
