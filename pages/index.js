import React from 'react';

import Nav from '../src/Nav';
import Home from '../components/Home';
import Copyright from '../src/Copyright';

export default function Index() {
    return (
        <React.Fragment>
          <Nav />  
          <Home />    
          <Copyright />    
        </React.Fragment>
    );
}