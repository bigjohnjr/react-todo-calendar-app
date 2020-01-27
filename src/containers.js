import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SideNav from './SideNav';

export const withRouter = Wrapped => props => (
  <Router>
    <Wrapped {...props} />
  </Router>
);

export const withSideNav = Wrapped => props => (
  <div className='wrapper'>
    <SideNav/>
    <div className='container'>
      <Wrapped {...props} />
    </div>
  </div>
);
