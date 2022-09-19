import { getUser } from 'redux/contacts/auth/authSelectors';
import { useSelector } from 'react-redux';

import { logout } from 'redux/contacts/auth/authOperations';
import { useDispatch } from 'react-redux';

import s from './UserMenu.module.css'

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logout());

  return (
    <div className={s.block}>
      <p className={s.email}> {email} </p>
      <button className={s.btn} onClick={onLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
