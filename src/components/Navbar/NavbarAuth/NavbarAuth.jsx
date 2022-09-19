import { NavLink } from 'react-router-dom';
import s from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={s.authMenu}>
      <NavLink to="/register">Register;</NavLink>
      <NavLink to="/login">Login;</NavLink>
    </div>
  );
};

export default NavbarAuth;
