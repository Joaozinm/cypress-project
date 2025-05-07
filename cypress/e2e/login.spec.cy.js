import userData from "../fixtures/users/userData.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  it("Login - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid).should("be.visible");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
