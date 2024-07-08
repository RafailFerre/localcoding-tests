import { ProgressPage } from "../../pages"
import * as color from "../fixtures/progress-color.json"

describe('PROGRESS', () => {
  beforeEach(() => {
    // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.intercept('GET', '/course/coursesProgress/*', { fixture: 'progress-mocks.json' })
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    ProgressPage.visit()
    
  })
  
  it('JavaScript Syntax Progress', () => {
    ProgressPage.innerJavaScript.should('be.visible').and('have.css','background-color', color.green)
    // ProgressPage.innerJavaScriptText.should('be.visible').and('have.text', '50%')
    ProgressPage.innerJavaScriptCircle.should('be.visible').and('have.css','color', color.green)
  })

  it('QA Manual Progress', () => {
    ProgressPage.innerQAManual.should('be.visible').and('have.css','background-color', color.blue)
    ProgressPage.innerQAManualText.should('be.visible').and('have.text', '50%')
    // ProgressPage.innerQAManualCircle.should('be.visible').and('have.css','color', color.green)
  });
})
