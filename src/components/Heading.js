import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './NavigationBar';

const Heading = () => (
  <header className="header">
    <div className="headerSide">
      <h1>Bookstore CMS</h1>
      <NavigationBar />
    </div>
    <div><FontAwesomeIcon icon={faUser} /></div>
  </header>
);

export default Heading;
