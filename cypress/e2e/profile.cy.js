import { ProfilePage } from '../../pages'
// import { Navbar } from '../../elements'
// import { LoginPage } from '../../pages/Login'
// import { SignInPage } from '../../pages/Sign-in'

describe('PROFILE', () => {
  beforeEach(() => {
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD')) // custom command
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    // cy.loginByToken()
    // cy.visit(`${Cypress.env('BASE_URL')}/profile/${Cypress.env('userId')}`)
    // SignInPage.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    // LoginPage.visit()
    // LoginPage.login()
  })
  it('Sign out', () => {
    ProfilePage.navbar.dropdownUserName.click()
    ProfilePage.navbar.buttonLogOut.click()
    // ProfilePage.logOut()
    // cy.get(this.userNameDropdownSelector).click()
    // cy.get(this.logOutButtonSelector).click()

    cy.location('pathname').should('eq', '/')
  })
})
