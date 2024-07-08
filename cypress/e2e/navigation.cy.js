import { Navbar } from "../../elements"

describe('NAVIGATION', () => {
  beforeEach(() => {
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))  // custom command
  })

  it('Link Courses', () => {
    Navbar.linkCourses.click()

    cy.contains('Interactive Courses').should('be.visible')
    cy.location('pathname').should('eq', '/course')
  })

  it('Link Challenges', () => {
    Navbar.linkChallenges.click()

    cy.contains('Coding challenges').should('be.visible')
    cy.location('pathname').should('eq', '/challenge')
  })

  it('Link Interview Questions', () => {
    Navbar.linkInterviewQuestions.click()

    cy.contains('Interview practice cards').should('be.visible')
    cy.location('pathname').should('eq', '/flash')
  })

  it('Link Diary', () => {
    Navbar.linkDiary.click()

    cy.contains('Diary of progress helps to achieve big goals').should('be.visible')
    cy.location('pathname').should('eq', '/diary')
  })
})
