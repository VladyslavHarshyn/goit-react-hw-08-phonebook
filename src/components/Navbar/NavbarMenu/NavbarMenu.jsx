import s from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
