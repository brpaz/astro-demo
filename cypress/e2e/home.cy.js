describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('Welcome to Astro');
  });
});
