import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
      <ul className="list-inline">
  <li className="list-inline-item">
    <a href="#">Privacy</a>
  </li>
  <li className="list-inline-item">
    <a href="#">Terms</a>
  </li>
  <li className="list-inline-item">
    <a href="#">FAQ</a>
  </li>
</ul>
    </Typography>
    );
}