before(() => {
    cy.request('POST', 'https://server-prod.pasv.us/user/login', {
        email: Cypress.env('email'),
        password: Cypress.env('password'),
    }).then((responce) => {
        Cypress.env('token', responce.body.payload.token)
        Cypress.env('userId', responce.body.payload.userId)
    })
})
