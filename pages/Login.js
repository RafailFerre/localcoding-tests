class Login {
    emailSelector = '#normal_login_email'
    passwordSelector = '#normal_login_password'
    buttonSubmitSelector = '.login-form-button'
    login() {
        cy.get(this.emailSelector).type(Cypress.env('email'))
        cy.get(this.passwordSelector).type(Cypress.env('password'))
        cy.get(this.buttonSubmitSelector).should('be.enabled').click()
    }
}

export const LoginPage = new Login()
