import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const bootstrap4 = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous";
  const fontawesome = "https://use.fontawesome.com/releases/v5.1.0/css/all.css";
  const latoFont = "https://fonts.googleapis.com/css?family=Lato";
  const gstatic = "https://fonts.gstatic.com";
  const roboconFont = "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap";
  const muliFont = "https://fonts.googleapis.com/css?family=Muli";

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <React.Fragment>
      <Head>

  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Page Title</title>
  <link rel="stylesheet" href={bootstrap4} />
  <link rel="stylesheet" href={fontawesome} />
  <link href={latoFont} rel="stylesheet" />
  <link rel="preconnect" href={gstatic} />
  <link href={roboconFont} rel="stylesheet" />
  <link href={muliFont} rel="stylesheet" />
  <link rel="stylesheet" href="./../src/index.css" />

      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
