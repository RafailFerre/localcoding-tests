import { BasePage } from './Base'

class Login extends BasePage {
    inputEmail = '#normal_login_email'
    inputPassword = '#normal_login_password'
    buttonSubmit = '.login-form-button'

    visit() {
        cy.visit(`${Cypress.env('BASE_URL')}/user/login`)
    }
    login() {
        cy.get(this.inputEmail).type(`${Cypress.env('EMAIL')}`)
        cy.get(this.inputPassword).type(`${Cypress.env('PASSWORD')}`)
        cy.get(this.buttonSubmit).should('be.enabled').click()
    }
    // loginInvalidPassword() {
    //     cy.get(this.emailSelector).type(`${Cypress.env('EMAIL')}`)
    //     cy.get(this.passwordSelector).type('12345')
    //     cy.get(this.buttonSubmitSelector).should('be.enabled').click()
    // }
}

export const LoginPage = new Login();
