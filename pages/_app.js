
// Localization init
import '../i18n/init';

import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";

import { Router, useRouter } from "next/router";
import { AnimateSharedLayout } from 'framer-motion';
// Failed, does not work with static.  import { I18nProvider } from 'next-localization';
//  Failed, does not work with static.  import { NextIntlProvider } from 'next-intl';
import i18next from 'i18next';

import PageChange from "components/PageChange/PageChange.js";

import "styles/scss/nextjs-material-kit.scss?v=1.2.0";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {


  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const { lngDict, ...rest } = pageProps;
    i18next.changeLanguage(pageProps.language);

    return (

      <React.Fragment>

        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Azure Media Services</title>
        </Head>

        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>

      </React.Fragment>

    );
  }
}
