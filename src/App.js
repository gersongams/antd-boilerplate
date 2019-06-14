import { LocaleProvider } from "antd";
import esEs from "antd/lib/locale-provider/es_ES";
import { createBrowserHistory } from "history";
import "moment/locale/es";
import React from "react";
import { ApolloProvider } from "react-apollo";
import AuthHelper, { AuthContext } from "./auth";
import Routes from "./routes";
import { client } from "./utils/apolloConfig";
import { GlobalContextProvider } from "./utils/globalContext";
import { GlobalStyle } from "./utils/globalStyle";

const history = createBrowserHistory();

export default () => (
  <ApolloProvider client={client}>
    <LocaleProvider locale={esEs}>
      <AuthContext.Provider value={new AuthHelper()}>
        <GlobalStyle />
        <GlobalContextProvider history={history}>
          <Routes />
        </GlobalContextProvider>
      </AuthContext.Provider>
    </LocaleProvider>
  </ApolloProvider>
);
