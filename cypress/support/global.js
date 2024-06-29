before(() => {
    cy.request('POST', 'https://server-prod.pasv.us/user/login', {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    }).then((response) => {
        Cypress.env('token', response.body.payload.token)
        Cypress.env('userId', response.body.payload.user._id)
    })
})
