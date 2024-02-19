class Profile {
    userNameDropdownSelector = '.ms-2.me-2'
    logOutButtonSelector = '[data-qa="logout"]'

    logOut() {
        cy.get(this.userNameDropdownSelector).click()
        cy.get(this.logOutButtonSelector).click()

        cy.location('pathname').should('eq', '/')
    }
}

export const ProfilePage = new Profile()
