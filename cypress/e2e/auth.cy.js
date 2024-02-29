import { SignInPage } from '../../pages/Sign-in'
import { LoginPage } from '../../pages/Login'
import { BasePage } from '../../pages/Base'
import { ProfilePage } from '../../pages/Profile'

describe('Authorization', () => {
    beforeEach(() => {
        SignInPage.visit()
        // LoginPage.visit()
        // cy.visit('/user/login')
    })

    it('Sign in with valid credentials', () => {
        SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
        // cy.login(Cypress.env('email'), Cypress.env('password')) // custom command
        // LoginPage.login()
        // cy.get('#normal_login_email').type(Cypress.env('email'))
        // cy.get('#normal_login_password').type(Cypress.env('password'))
        // cy.get('.login-form-button').should('be.enabled')
        // cy.get('.login-form-button').click()
        cy.url().should(
            'include',
            'https://coding.pasv.us/profile' //62ec1c48a86ef3cf6d2be322'
        )
        ProfilePage.imageAvatar.should('be.visible')
        // cy.get('.ant-avatar-square').should('be.visible')
    })

    it('Sign in with invalid credentials', () => {
        SignInPage.signIn(Cypress.env('email'), '12345')
        // cy.login(Cypress.env('email'), '12345')
        // cy.login('test@mail.com', Cypress.env('password'))
        // LoginPage.loginInvalidPassword()
        // cy.get('#normal_login_email').type(Cypress.env('email')) //valid email
        // cy.get('#normal_login_password').type('12345') //invalid password
        // cy.get('.login-form-button').should('be.visible')
        // cy.get('.login-form-button').click()
        cy.url().should('eq', 'https://coding.pasv.us/user/login')
        LoginPage.toast
            .should('be.visible')
            .and('have.text', 'User login. Fail') // class BasePage
        // cy.get('.ant-notification-notice-message').should('be.visible')
        //             .and('have.text', 'User login. Fail')
    })

    it('Sign in form validation', () => {
        SignInPage.inputEmail.should('have.value', '')
        SignInPage.inputPassword.should('have.value', '')
        SignInPage.buttonSubmit.should('be.disabled')
        // cy.get('#normal_login_email').should('have.value', '')
        // cy.get('#normal_login_password').should('have.value', '')
        // cy.get('.login-form-button').should('be.disabled')
        SignInPage.inputEmail.type('test')
        SignInPage.labelValidationEmail
            .should('be.visible')
            .and('have.text', "'email' is not a valid email")
        SignInPage.buttonSubmit.should('be.disabled')
        // cy.get('#normal_login_email').type('test')
        // cy.get('#normal_login_email_help')
        //     .should('be.visible')
        //     .should('have.text', "'email' is not a valid email")
        // cy.get('.login-form-button').should('be.disabled')

        SignInPage.inputEmail.type('@')
        SignInPage.labelValidationEmail
            .should('be.visible')
            .and('have.text', "'email' is not a valid email")
        SignInPage.buttonSubmit.should('be.disabled')

        SignInPage.inputEmail.type('mail')
        SignInPage.labelValidationEmail
            .should('be.visible')
            .and('have.text', "'email' is not a valid email")
        SignInPage.buttonSubmit.should('be.disabled')

        SignInPage.inputEmail.type('.')
        SignInPage.labelValidationEmail
            .should('be.visible')
            .and('have.text', "'email' is not a valid email")
        SignInPage.buttonSubmit.should('be.disabled')

        SignInPage.inputEmail.type('com')
        SignInPage.labelValidationEmail.should('not.exist')
        SignInPage.buttonSubmit.should('be.disabled')

        SignInPage.inputPassword.type('test123')
        SignInPage.labelValidationPassword.should('not.exist')
        SignInPage.buttonSubmit.should('be.enabled')
        // cy.get('#normal_login_password').type('test123') // invalid password
        // cy.get('#normal_login_password_help').should('not.exist')
        // cy.get('.login-form-button').should('be.enabled')

        SignInPage.inputEmail.clear()
        SignInPage.labelValidationEmail
            .should('be.visible')
            .and('have.text', 'Required')
        SignInPage.buttonSubmit.should('be.disabled')

        SignInPage.inputPassword.clear()
        SignInPage.labelValidationPassword
            .should('be.visible')
            .and('have.text', 'Required')
        SignInPage.buttonSubmit.should('be.disabled')
    })
})
