/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Sign in using email & password
         * @example
         * cy.login('test@email.com', 'parol123')
         */
        login(email: string, password: string): Chainable<any>

        /**
         * Sign in using token & userId
         * @example
         * cy.loginByToken()
         */
        loginByToken(): Chainable<any>
    }
}
