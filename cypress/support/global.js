before(() => {
    cy.request('POST', 'https://server-prod.pasv.us/user/login', {
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD')
    }).then((response) => {
        Cypress.env('Cookie', response.headers['Set-Cookie'])
        Cypress.env('userId', response.body.payload.user._id)
    })
})

