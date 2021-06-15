describe('UrlForm', () => {
  beforeEach(() => {
    cy.interceptUrl()
    cy.visit('http://localhost:3000/')
  })

  it('should display the title and existing URLs', () => {
    cy.get('h1').should('have.text', 'URL Shortener')
    cy.get('.url')
      .get('h3').should('have.text', 'Test Data')
      .get('a').should('have.text', 'http://localhost:3001/useshorturl/1')
      .get('p').should('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  });
  it('should render the form with the proper inputs', () => {
    cy.get('input').should('have.length', 2)
      .invoke('attr', 'placeholder').should('contain','Title...')
  });

  it('should have the form inputs reflect what is being typed', () => {
    cy.get('.title-input').type('YOU CAN DO THIS MEL')
    cy.get('.url-input').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('button').click()
  })
})