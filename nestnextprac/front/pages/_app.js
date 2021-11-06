import React from "react";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import AppLayout from "../components/Applayout";
import { applyMiddleware, createStore, compose } from "redux";
import PropTypes from "prop-types";
import reducer from "../reducers";

const Layout = ({ Component }) => {
  return (
    <>
      <Head>
        <title>asdf</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};
Layout.propTypes = {
  // ts하는게 아니라 prop-types로 검증해주면 좋을듯. (적은 비용으로 안정성을 더함)
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(Layout);
