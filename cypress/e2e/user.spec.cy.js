import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const Chance = require("chance");
const chance = new Chance();

describe("Orange HRM Tests", () => {
  it("User Info Update - Success", () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    DashboardPage.verifyDashboardPage();
    MenuPage.accessMyInfoPage();
    MyInfoPage.changeFirstName(chance.first());
    MyInfoPage.changeLastName(chance.last());
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
});
