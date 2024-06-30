import { ProfilePage } from '../../pages/Profile'
// import { LoginPage } from '../../pages/Login'
// import { SignInPage } from '../../pages/Sign-in'

describe('Profile', () => {
    beforeEach(() => {
        cy.login(`${Cypress.env('EMAIL')}`, `${Cypress.env('PASSWORD')}`) // custom command
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        // cy.loginByToken()
        // cy.visit(`${Cypress.env('BASE_URL')}/profile/${Cypress.env('userId')}`)
        // SignInPage.signIn(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
        // LoginPage.visit()
        // LoginPage.login()
    })
    it('Sign out', () => {
        ProfilePage.logOut()

        cy.location('pathname').should('eq', '/')
        // cy.get(this.userNameDropdownSelector).click()
        // cy.get(this.logOutButtonSelector).click()
        // cy.location('pathname').should('eq', '/')
    })
})
