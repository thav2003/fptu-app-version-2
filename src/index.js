import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { HelmetProvider } from "react-helmet-async";
import serverStyleCleanup from "node-style-loader/clientCleanup";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./app/Main";
//import { initializeFirebase, initialServiceWorker } from "./firebase";
import configureStore from "./store";
import getUserIP from "./tracker";
const { store, persistor } = configureStore();

const AppBundle = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <HelmetProvider>
          <Main />
        </HelmetProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

Loadable.preloadReady().then(() => {
  const loadingDOM = document.getElementById("loading-bg");

  //console.log(window.location);
  // console.log(
  //   window.location.origin + window.location.pathname,
  //   APP_ENV.API_BASE_URL + ":3001"
  // );
  getUserIP();
  // if (
  //   window.location.origin + window.location.pathname ===
  //   APP_ENV.API_BASE_URL + ":3001/"
  // ) {
  //   console.log("play video");
  //   const video = document.getElementById("introVideo");
  //   if (video) {
  //     window.onload = function () {
  //       video.addEventListener("click", video.play());
  //     };
  //     video.onended = function (e) {
  //       if (loadingDOM) {
  //         loadingDOM.remove();
  //       }
  //       ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  //     };
  //   }
  // } else {
  //   if (loadingDOM) {
  //     loadingDOM.remove();
  //   }

  //   ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  // }
  if (loadingDOM) {
    loadingDOM.remove();
  }
  ReactDOM.hydrate(AppBundle, document.getElementById("root"));
});

// Hot reload
if (module.hot) {
  module.hot.accept();
}

serverStyleCleanup();
// initializeFirebase();
// initialServiceWorker();
