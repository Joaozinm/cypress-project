class MyInfoPage {
  selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    datesField: "[placeholder='yyyy-dd-mm']",
    closeDateButton: ".--close",
    saveUserInfoButton: "[type='submit']",
    checkBoxFields: "[tabindex='0']",
    genderRadio: ".oxd-radio-wrapper",
  };

  changeFirstName(firstName) {
    cy.get(this.selectorsList.firstNameField).clear().type(firstName);
  }
  changeLastName(lastName) {
    cy.get(this.selectorsList.lastNameField).clear().type(lastName);
  }
  changeGenericField(index, value) {
    cy.get(this.selectorsList.genericField).eq(index).clear().type(value);
  }
  changeDateField(index, value) {
    cy.get(this.selectorsList.datesField).eq(index).clear().type(value);
  }
  clickCloseDateButton() {
    cy.get(this.selectorsList.closeDateButton).click();
  }
  clickCheckBoxField(index) {
    cy.get(this.selectorsList.checkBoxFields).eq(index).click();
  }
  clickGenderRadio(index) {
    cy.get(this.selectorsList.genderRadio).eq(index).click();
  }
  clickSaveUserInfoButton() {
    cy.get(this.selectorsList.saveUserInfoButton).eq(0).click();
  }
  verifySuccessMessage(message) {
    cy.get("body").should("contain", message);
  }
}

export default new MyInfoPage();
