import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from './Link';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="index.html">React Router - News</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" href="/posts/4">Tin tức</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="chitiet.html">Tin chi tiết</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}
