import { BasePage } from './Base'

class Profile extends BasePage {
    userNameDropdownSelector = '.ms-2.me-2'
    logOutButtonSelector = '[data-qa="logout"]'
    get imageAvatar() {
        return cy.get('.ant-avatar-square')
    }

    logOut() {
        cy.get(this.userNameDropdownSelector).click()
        cy.get(this.logOutButtonSelector).click()

        cy.location('pathname').should('eq', '/')
    }
}

export const ProfilePage = new Profile()
