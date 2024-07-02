import { BasePage } from './Base'

class Profile extends BasePage {

    get userNameDropdown() { return cy.get('.ms-2.me-2') }
    get logOutButton() { return cy.get('[data-qa="logout"]') } 
    get imageAvatar() { return cy.get('.ant-avatar-square') }

    logOut() {
        this.userNameDropdown.click()
        this.logOutButton.click()
        // cy.location('pathname').should('eq', '/')
    }
}

export const ProfilePage = new Profile()
