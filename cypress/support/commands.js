// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { LoginPage } from "../../pages/Login";

import { SignInPage } from '../../pages'
Cypress.Commands.add('login', (email, password) => {
  SignInPage.visit()
  SignInPage.signIn(email, password)
  // cy.visit(`${Cypress.env('BASE_URL')}/user/login`)
  // cy.get('#normal_login_email').type(email)
  // cy.get('#normal_login_password').type(password)
  // cy.get('.login-form-button').click()
  // LoginPage.visit()
})

Cypress.Commands.add('loginByApi', () => {
  cy.visit('/')
  //window.cookies.setItem('connect.sid', Cypress.env('Cookie'))
  window.localStorage.setItem('userId', Cypress.env('userId'))
  window.localStorage.setItem('lang', 'ru')
})
