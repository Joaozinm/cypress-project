class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails'] .oxd-text--span",
      adminButton: "[href='/web/index.php/admin/viewAdminModule']",
      pimButton: "[href='/web/index.php/pim/viewPimModule']",
      leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
      timeButton: "[href='/web/index.php/time/viewTimeModule']",
      recruitmentButton:
        "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      performanceButton:
        "[href='/web/index.php/performance/viewPerformanceModule']",
      dashboardButton: "[href='/web/index.php/dashboard/index']",
      directoryButton: "[href='/web/index.php/directory/viewDirectory']",
      maintenanceButton:
        "[href='/web/index.php/maintenance/viewMaintenanceModule']",
      buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
      claimButton: "[href='/web/index.php/claim/viewClaimModule']",
    };
    return selectors;
  }

  accessAdminPage() {
    cy.get(this.selectorsList().adminButton).click();
  }

  accessMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
  }

  accessPimPage() {
    cy.get(this.selectorsList().pimButton).click();
  }
  accessLeavePage() {
    cy.get(this.selectorsList().leaveButton).click();
  }
  accessTimePage() {
    cy.get(this.selectorsList().timeButton).click();
  }
  accessRecruitmentPage() {
    cy.get(this.selectorsList().recruitmentButton).click();
  }
  accessPerformancePage() {
    cy.get(this.selectorsList().performanceButton).click();
  }
  accessDashboardPage() {
    cy.get(this.selectorsList().dashboardButton).click();
  }
  accessDirectoryPage() {
    cy.get(this.selectorsList().directoryButton).click();
  }
  accessMaintenancePage() {
    cy.get(this.selectorsList().maintenanceButton).click();
  }
  accessClaimPage() {
    cy.get(this.selectorsList().claimButton).click();
  }
  accessBuzzPage() {
    cy.get(this.selectorsList().buzzButton).click();
  }
}

export default new MenuPage();
