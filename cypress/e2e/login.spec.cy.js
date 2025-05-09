import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

describe("Login Orange HRM Tests", () => {
  it("Login - Success", () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    DashboardPage.verifyDashboardPage();
  });
  it("Login - Fail", () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    LoginPage.verifyWrongCredentialAlert();
  });
});
