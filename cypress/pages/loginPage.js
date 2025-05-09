class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      submitButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().submitButton).click();
  }
  verifyWrongCredentialAlert() {
    cy.get(this.selectorsList().wrongCredentialAlert).should(
      "contain",
      "Invalid credentials"
    );
  }
}

export default new LoginPage();
