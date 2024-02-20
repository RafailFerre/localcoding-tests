import { ProfilePage } from '../../pages/Profile'
import { LoginPage } from '../../pages/Login'

describe('Profile', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        // cy.loginByToken()
        // cy.visit(`/profile/${Cypress.env('userId')}`)
        // LoginPage.visit()
        // LoginPage.login()
    })
    it('Sign out', () => {
        ProfilePage.logOut()
        // cy.get(this.userNameDropdownSelector).click()
        // cy.get(this.logOutButtonSelector).click()
        //
        // cy.location('pathname').should('eq', '/')
    })
})
