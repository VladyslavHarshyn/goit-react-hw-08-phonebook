import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from '../Navbar/NavbarAuth/NavbarAuth';

import { NavLink } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

import s from './Navbar.module.css';

const Navbar = () => {
  const isUserLogin = useAuth();
  return (
    <div>
      <nav className={s.navbar}>
        <NavLink to="/">Home</NavLink>
        {isUserLogin && <NavbarMenu />}
        {isUserLogin ? <UserMenu /> : <NavbarAuth />}
      </nav>
    </div>
  );
};

export default Navbar;
