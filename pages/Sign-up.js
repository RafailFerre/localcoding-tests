import { BasePage } from '../pages/Base'

class SignUpPage extends BasePage {

 get inputEmail() { return cy.get('#user_register_email') }
 get inputPassword() { return cy.get('#user_register_password') }
 get inputCheckbox() { return cy.get('#user_register_agreement') }
 get buttonSubmit() { return cy.get('[type="submit"]') }
 
 get labelValidationEmail() { return cy.get('#user_register_email_help') }
 get labelValidationPassword() { return cy.get('#user_register_password_help') }

 get inputPhone() { return cy.get('#phone') }

 get inputFirstName() { return cy.get('#firstName') }
 get inputLastName() { return cy.get('#lastName') }

 visit () {
    cy.visit(`${Cypress.env('BASE_URL')}/user/register`)
 }

signUp (email, password) {
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.inputCheckbox.click()
    this.buttonSubmit.click()
 }

 signUpPhone (phone) {
    this.inputPhone.type(phone)
    this.buttonSubmit.click()
 }

 signUpName (firstName, lastName) {
    this.inputFirstName.type(firstName)
    this.inputLastName.type(lastName)
    this.buttonSubmit.click()
 }

}

export default new SignUpPage()