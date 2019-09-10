describe('Business Training Academy Website', () => {
  it('should display text in English', () => {
    cy.visit('/');
    cy.get('.site-header').find('.site-header__link:contains("Business Training Academy")');
  });

  it('should have the lang attribute set to en', () => {
    cy.get('html')
      .invoke('attr', 'lang')
      .should('contain', 'en');
  });

  // @Todo: I had to use `force: true` on click or the test would fail because the <a> element
  // had a height of 0. This could be because I set 'font-size: 0' to hide the text.
  // The language icons need to be structured and styled much better then they currently are.
  it('should change language to German when the user clicks the German Flag', () => {
    cy.get('li.de')
      .find('.language-link')
      .click({ force: true });
    cy.get('html')
      .invoke('attr', 'lang')
      .should('contain', 'de');
    cy.get('.site-header').find('.site-header__link:contains("Geschäft Ausbildung Schule")');
  });

  it('should change language to French when the user clicks the French Flag', () => {
    cy.get('li.fr')
      .find('.language-link')
      .click({ force: true });
    cy.get('html')
      .invoke('attr', 'lang')
      .should('contain', 'fr');
    cy.get('.site-header').find('.site-header__link:contains("Académie de formation commerciale")');
  });
});
