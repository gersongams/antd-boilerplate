import { Auth } from "aws-amplify";

class AuthHelper {
  constructor() {
    this.auth = Auth;
  }

  signUp = user =>
    this.auth.signUp({
      ...user
    });

  signIn = user => this.auth.signIn({ ...user });

  confirmSignUp = (user, code) => this.auth.confirmSignUp(user, code);

  signOut = () => this.auth.signOut();

  userChangePassword = params =>
    this.auth
      .currentAuthenticatedUser()
      .then(user =>
        this.auth.changePassword(user, params.oldPassword, params.newPassword)
      );

  userforgotPassword = user => this.auth.forgotPassword({ ...user });

  getCurrentSession = () => this.auth.currentSession();
}

export default AuthHelper;
