describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('children').click();
    cy.url().should('contains','commands');
  })
  xit('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type('Lorem ipsum')
  })
})