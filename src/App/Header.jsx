import React from 'react';
import MenuItem from './Menuitem.jsx'
import '../style/header.scss';

const Header = ({ headerClass, navClass, navMenuListClass }) => (
  <header className={headerClass}>
    <nav className={navClass}>
      <ul className={navMenuListClass}>
        <MenuItem navMenuItem="header__navmenu-item" title="Main" />
        <MenuItem navMenuItem="header__navmenu-item" title="FAQ" />
        <MenuItem navMenuItem="header__navmenu-item" title="Content" />
        <MenuItem navMenuItem="header__navmenu-item" title="Contacts" />
      </ul>
    </nav>
  </header>
);

export default Header