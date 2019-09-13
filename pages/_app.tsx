import App from 'next/app';
import React from 'react';

/* eslint-disable class-methods-use-this */
class Affordable extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

Affordable.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default Affordable;
