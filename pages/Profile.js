import { Navbar } from '../elements'
import { BasePage } from './Base'

class Profile extends BasePage {
  navbar = Navbar

  get imageAvatar() { return cy.get('.ant-avatar-square') }

  get userNameDropdown() { return cy.get('.ms-2.me-2') }
  get logOutButton() { return cy.get('[data-qa="logout"]') }

  logOut() {
    this.userNameDropdown.click()
    this.logOutButton.click()
  }
}

export const ProfilePage = new Profile()
