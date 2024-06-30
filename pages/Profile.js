import { BasePage } from './Base'

class Profile extends BasePage {

    get userNameDropdownSelector() { return cy.get('.ms-2.me-2') }
    get logOutButtonSelector() { return cy.get('[data-qa="logout"]') } 
    get imageAvatar() { return cy.get('.ant-avatar-square') }

    logOut() {
        this.userNameDropdownSelector.click()
        this.logOutButtonSelector.click()
        // cy.location('pathname').should('eq', '/')
    }
}

export const ProfilePage = new Profile()
