import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav>
      <ul className="navigation-list">
        <li key={links[0].id}>
          <NavLink to={links[0].path} className="active-link">
            {links[0].text}
          </NavLink>
        </li>
        <li key={links[1].id}>
          <NavLink to={links[1].path} className="active-link">
            {links[1].text}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
