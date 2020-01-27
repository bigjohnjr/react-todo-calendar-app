import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = props => (
  <div className="todo-sidenav">
    <section>
      <ul>
        <li><NavLink to='/'>Todo App</NavLink></li>
        <li><NavLink to='/calc'>Calculator App</NavLink></li>
      </ul>
    </section>
  </div>
);

export default SideNav;
