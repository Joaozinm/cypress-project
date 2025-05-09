import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

describe("Orange HRM Tests", () => {
  it.only("User Info Update - Success", () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    DashboardPage.verifyDashboardPage();
    MenuPage.accessMyInfoPage();
    MyInfoPage.changeFirstName("Joao");
    MyInfoPage.changeLastName("Silva");
    MyInfoPage.changeGenericField(3, "Test");
    MyInfoPage.changeGenericField(4, "Test");
    MyInfoPage.changeGenericField(5, "Test");
    MyInfoPage.changeDateField(0, "2026-08-20");
    MyInfoPage.clickCloseDateButton();
    MyInfoPage.changeDateField(1, "2028-08-20");
    MyInfoPage.clickCloseDateButton();
    MyInfoPage.clickCheckBoxField(0);
    cy.contains("div", "Brazilian").click();
    MyInfoPage.clickCheckBoxField(1);
    cy.contains("div", "Married").click();
    MyInfoPage.clickGenderRadio(1);
    MyInfoPage.clickSaveUserInfoButton();
    MyInfoPage.verifySuccessMessage("Successfully Updated");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
