import React from 'react';

import Link from '../../src/Link';
import Nav from '../../src/Nav';
import Header from '../../components/Header';
import Copyright from '../../src/Copyright';

export default function Posts() {
    return (
        <React.Fragment>
          <Nav />  
          <Header title = "Trang Danh Sách Tin" />    
          <Copyright />    
        </React.Fragment>
    );
}