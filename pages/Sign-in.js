import { BasePage } from './Base'

class SignIn extends BasePage {
  get inputEmail() { return cy.get('#normal_login_email') }
  get inputPassword() { return cy.get('#normal_login_password') }
  get buttonSubmit() { return cy.get('.login-form-button') }
  get labelValidationEmail() { return cy.get('#normal_login_email_help') }
  get labelValidationPassword() { return cy.get('#normal_login_password_help') }

  visit() {
    cy.visit('/user/login')
    // cy.visit(`${Cypress.env('BASE_URL')}/user/login`)
  }

  signIn(email, password) {
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.buttonSubmit.click()
  }
}

export const SignInPage = new SignIn()
