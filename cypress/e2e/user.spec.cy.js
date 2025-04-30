import userData from "../fixtures/users/userData.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails'] .oxd-text--span",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    datesField: "[placeholder='yyyy-dd-mm']",
    closeDateButton: ".--close",
    saveUserInfoButton: "[type='submit']",
  };

  it.only("User Info Update - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid).should("be.visible");
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type("Test");
    cy.get(selectorsList.lastNameField).clear().type("Test");
    cy.get(selectorsList.genericField).eq(3).clear().type("test");
    cy.get(selectorsList.genericField).eq(4).clear().type("test");
    cy.get(selectorsList.genericField).eq(5).clear().type("test");
    cy.get(selectorsList.datesField).eq(0).clear().type("2026-08-20");
    cy.get(selectorsList.closeDateButton).click();
    cy.get(selectorsList.datesField).eq(1).clear().type("2028-08-20");
    cy.get(selectorsList.closeDateButton).click();
    cy.get(selectorsList.saveUserInfoButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
