describe('Authorization', () => {
    beforeEach(() => {
        cy.visit('https://coding.pasv.us/user/login')
    })

    it('Sign in with valid credentials', () => {
        //cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').type('ferrerafail@gmail.com')
        cy.get('#normal_login_password').type('Raf261085')
        cy.get('.login-form-button').should('be.enabled')
        cy.get('.login-form-button').click()

        cy.url().should('eq', 'https://coding.pasv.us/profile/62ec1c48a86ef3cf6d2be322')
        cy.get('.ant-avatar-square').should('be.visible')
    })

    it('Sign in with invalid credentials', () => {
        //cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email').type('ferrerafail@gmail.com') //valid email
        cy.get('#normal_login_password').type('12345') //invalid password
        cy.get('.login-form-button').should('be.visible')
        cy.get('.login-form-button').click()

        cy.url().should('eq', 'https://coding.pasv.us/user/login')
        cy.get('.ant-notification-notice-message')
            .should('be.visible')
            .should('have.text', 'User login. Fail')
    })
})