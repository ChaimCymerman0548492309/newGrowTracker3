describe('Home page', () => {
  it('title cy test', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="cy-tytle"]').should('exist')
      .should('have.text', 'Welcome to the GrowTracker app')
  })
}),
  it('butten cy test', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="cy-Button"]').should('exist').click()
    cy.url().should('include', '/AllGardens')
  })