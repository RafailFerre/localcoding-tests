import { SignUpPage, ProfilePage } from '../../pages'
const chance = require('chance').Chance()

describe('SIGN UP', () => {
  const email = chance.email()
  const password = chance.word({ length: 5 })
  const phone = chance.phone({ formatted: false })
  const firstName = chance.first()
  //const lastName = chance.last();

  describe('POSITIVE', () => {
    before(() => {
      SignUpPage.visit()
    })
    it('Sign up with valid credentials', () => {
      SignUpPage.signUp(email, password)

      cy.wait(2000)

      //cy.url().should('eq', 'https://coding.pasv.us/onboarding')
      cy.location('pathname').should('eq', '/onboarding')
      SignUpPage.inputPhone.should('be.visible')

      SignUpPage.signUpPhone(phone)

      cy.wait(2000)

      //cy.url().should('eq', 'https://coding.pasv.us/onboarding')
      cy.location('pathname').should('eq', '/onboarding')
      SignUpPage.inputFirstName.should('be.visible')
      SignUpPage.inputLastName.should('be.visible')

      SignUpPage.signUpName(firstName, firstName, { timeout: 2000 })

      cy.url().should('eq', 'https://coding.pasv.us/course')
      ProfilePage.navbar.dropdownUserName.should('be.visible')

      ProfilePage.logOut()

      cy.location('pathname').should('eq', '/')
    })
  })

  describe('NEGATIVE', () => {
    beforeEach(() => {
      SignUpPage.visit()
    })
    it('Sign up with invalid email', () => {
      SignUpPage.inputEmail.should('have.value', '')
      SignUpPage.inputPassword.should('have.value', '')
      SignUpPage.buttonSubmit.should('be.disabled')

      SignUpPage.inputEmail.type('invalid_email')

      //cy.url().should('eq', 'https://coding.pasv.us/user/register')
      cy.location('pathname').should('eq', '/user/register')
      SignUpPage.labelValidationEmail
        .should('be.visible')
        .and('have.text', `'email' is not a valid email`)
      SignUpPage.buttonSubmit.should('be.disabled')
    })
    it('Sign up with invalid password', () => {
      SignUpPage.inputEmail.should('have.value', '')
      SignUpPage.inputPassword.should('have.value', '')
      SignUpPage.buttonSubmit.should('be.disabled')

      SignUpPage.inputPassword.type('1234')

      //cy.url().should('eq', 'https://coding.pasv.us/user/register')
      cy.location('pathname').should('eq', '/user/register')
      SignUpPage.labelValidationPassword
        .should('be.visible')
        .and('have.text', 'Password must be min: 5 symbols.')
      SignUpPage.buttonSubmit.should('be.disabled')
    })
  })
})
