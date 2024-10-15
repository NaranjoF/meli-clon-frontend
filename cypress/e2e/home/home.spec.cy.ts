describe('Home', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('app is running');
  });
});
