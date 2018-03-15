import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <div className = "headerBanner">
      <p>iNeedCoffee! &nbsp;&nbsp;<Link to ="/" className = "homelink"> Home</Link></p>
    </div>
  );
};


export default Header;
