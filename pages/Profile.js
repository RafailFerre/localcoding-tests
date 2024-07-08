import { Navbar } from '../elements'
import { BasePage } from './Base'

class Profile extends BasePage {
  navbar = Navbar

  get imageAvatar() { return cy.get('.ant-avatar-square') }

  get linkGeneral() { return cy.get('[data-qa="general"]') }
  get linkHomeworks() { return cy.get('[data-qa="homeworks"]') }
  get linkQuestion() { return cy.get('[data-qa="questions"]') }
  get linkProgress() { return cy.get('[data-qa="progresses"]') }
  get linkDiary() { return cy.get('[data-qa="diary"]') }
  get linkChallenges() { return cy.get('[data-qa="challenges"]') }
  get linkKatas() { return cy.get('[data-qa="katas"]') }
  get linkAffiliates() { return cy.get('[data-qa="affiliates"]') }

  // get userNameDropdown() { return cy.get('.ms-2.me-2') }
  // get logOutButton() { return cy.get('[data-qa="logout"]') }

  logOut() {
    this.navbar.dropdownUserName.click()
    this.navbar.buttonLogOut.click()
    // this.userNameDropdown.click()
    // this.logOutButton.click()
  }
}

export const ProfilePage = new Profile()
