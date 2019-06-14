import React from "react";

const AuthContext = React.createContext(null);

export const withAmplify = Component => props => (
  <AuthContext.Consumer>
    {amplify => <Component {...props} amplify={amplify} />}
  </AuthContext.Consumer>
);

export default AuthContext;
