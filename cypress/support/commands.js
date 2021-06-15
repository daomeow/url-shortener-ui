const baseUrl = 'http://localhost:3001/api/v1/urls';

Cypress.Commands.add('interceptUrl', () => {
  cy.fixture('../fixtures/url.json')
    .then((json) => {
      cy.intercept('GET', baseUrl, json)
    })
})
