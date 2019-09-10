describe('The Content Editor', () => {
  it('should select the focal point of an image in the edit form in English', () => {
    cy.login('cypress editor', '123456789')
      .visit('/node/add')
      .get('html')
      .invoke('attr', 'lang')
      .should('contain', 'en')
      .visit('/node/2/edit')
      .get('.form-managed-file')
      .find('.focal-point-preview-link')
      .should('exist');
  });
});
