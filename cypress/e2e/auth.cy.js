describe('Authorization', () => {
    beforeEach(() => {
        cy.visit('/user/login')
    })

    it('Sign in with valid credentials', () => {
        //cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'))
        cy.get('.login-form-button').should('be.enabled')
        cy.get('.login-form-button').click()

        cy.url().should('eq', 'https://coding.pasv.us/profile/62ec1c48a86ef3cf6d2be322')
        cy.get('.ant-avatar-square').should('be.visible')
    })

    it('Sign in with invalid credentials', () => {
        //cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').type(Cypress.env('email')) //valid email
        cy.get('#normal_login_password').type('12345') //invalid password
        cy.get('.login-form-button').should('be.visible')
        cy.get('.login-form-button').click()

        cy.url().should('eq', 'https://coding.pasv.us/user/login')
        cy.get('.ant-notification-notice-message')
            .should('be.visible')
            .should('have.text', 'User login. Fail')
    })

    it('Sign in form validation', () => {
        //cy.get('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').should('have.value', '')
        cy.get('#normal_login_password').should('have.value', '')
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('test')
        cy.get('#normal_login_email_help > div')
            .should('be.visible')
            .should('have.text', "'email' is not a valid email")
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('@')
        cy.get('#normal_login_email_help > div')
            .should('be.visible')
            .should('have.text', "'email' is not a valid email")
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('email')
        cy.get('#normal_login_email_help > div')
            .should('be.visible')
            .should('have.text', "'email' is not a valid email")
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('.')
        cy.get('#normal_login_email_help > div')
            .should('be.visible')
            .should('have.text', "'email' is not a valid email")
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_email').type('com')
        cy.get('#normal_login_email_help > div').should('not.exist')
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_password').type('test123')
        cy.get('#normal_login_password_help > div').should('not.exist')
        cy.get('.login-form-button').should('be.enabled')

        cy.get('#normal_login_email').clear()
        cy.get('#normal_login_email_help')
            .should('be.visible')
            .should('have.text', 'Required')
        cy.get('.login-form-button').should('be.disabled')

        cy.get('#normal_login_password').clear()
        cy.get('#normal_login_password_help')
            .should('be.visible')
            .should('have.text', 'Required')
        cy.get('.login-form-button').should('be.disabled')
    })
})
