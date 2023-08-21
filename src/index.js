import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";
// import { IntlProvider } from "react-intl";
// import vi from "./translations/vi.json";
// import en from "./translations/en.json";
// import { LANGUAGE } from "./utils/constant";
// import '@formatjs/intl-pluralrules/polyfill';
// import '@formatjs/intl-pluralrules/locale-data/en';
// import '@formatjs/intl-pluralrules/locale-data/vi';

// import '@formatjs/intl-relativetimeformat/polyfill';
// import '@formatjs/intl-relativetimeformat/locale-data/en';
// import '@formatjs/intl-relativetimeformat/locale-data/vi';
const root = ReactDOM.createRoot(document.getElementById("root"));
// const language = navigator.language;
// const messages = language === LANGUAGE.EN ? en : vi;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProviderWrapper>
        <App />
      </IntlProviderWrapper>
    </Provider>
  </React.StrictMode>
);
// document.getElementById('root').innerHTML = App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
