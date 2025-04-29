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
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  };

  it("Login - Success", () => {
    cy.visit(urls.indexPath);
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", urls.homePath);
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard");
  });
  it("Login - Fail", () => {
    cy.visit(urls.indexPath);
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin12");
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
