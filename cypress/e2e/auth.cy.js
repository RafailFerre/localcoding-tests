// import { SignInPage } from '../../pages/Sign-in'
// // import { LoginPage } from '../../pages/Login'
// import { ProfilePage } from '../../pages/Profile'
import { SignInPage, ProfilePage } from '../../pages'

describe('AUTHORIZATION & AUTHENTICATION', () => {
  describe('POSITIVE', () => {
    beforeEach(() => {
      SignInPage.visit()
      // LoginPage.visit()
    })
    it('Sign in with valid credentials', () => {
      SignInPage.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
      // cy.login() // custom command
      // LoginPage.login()
      // cy.get('#normal_login_email').type(Cypress.env('email'))
      // cy.get('#normal_login_password').type(Cypress.env('password'))
      // cy.get('.login-form-button').should('be.enabled')
      // cy.get('.login-form-button').click()
      cy.url().should('include', 'https://coding.pasv.us/profile')

      ProfilePage.imageAvatar.should('be.visible')
      // cy.get('.ant-avatar-square').should('be.visible')
    })
  })

  describe('NEGATIVE', () => {
    beforeEach(() => {
      SignInPage.visit()
    })
    it('Sign in with invalid credentials', () => {
      SignInPage.signIn(Cypress.env('EMAIL'), 'invalid_password')

      cy.url().should('eq', 'https://coding.pasv.us/user/login')

      SignInPage.toast.should('be.visible').and('have.text', 'User login. Fail')
      // cy.get('.ant-notification-notice-message').should('be.visible')
      //             .and('have.text', 'User login. Fail')
    })

    it('Sign in form validation', () => {
      SignInPage.inputEmail.should('have.value', '')
      SignInPage.inputPassword.should('have.value', '')
      SignInPage.buttonSubmit.should('be.disabled')

      SignInPage.inputEmail.type('test')
      SignInPage.labelValidationEmail
        .should('be.visible')
        .and('have.text', "'email' is not a valid email")
      SignInPage.buttonSubmit.should('be.disabled')

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

      SignInPage.inputEmail.clear()
      SignInPage.labelValidationEmail.should('be.visible').and('have.text', 'Required')
      SignInPage.buttonSubmit.should('be.disabled')

      SignInPage.inputPassword.clear()
      SignInPage.labelValidationPassword.should('be.visible').and('have.text', 'Required')
      SignInPage.buttonSubmit.should('be.disabled')
    })
  })
})
