import userData from "../fixtures/users/userData.json";

describe("Orange HRM Tests", () => {
  const urls = {
    indexPath:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    homePath: "/web/index.php/dashboard/index",
  };

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  it("Login - Success", () => {
    cy.visit(urls.indexPath);
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", urls.homePath);
    cy.get(selectorsList.dashboardGrid).should("be.visible");
  });
  it("Login - Fail", () => {
    cy.visit(urls.indexPath);
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
