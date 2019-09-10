describe('Business Training Academy Course Node', () => {
  it('should display the course image', () => {
    cy.visit('/node/2');
    cy.get('.node-course')
      .find('[data="cy-course-image"]')
      .should('be.visible');
  });

  it('should display the introductory text', () => {
    cy.get('.node-course')
      .find('[data="cy-course-introductory-text"]')
      .invoke('text');
  });

  it('should display the course description', () => {
    cy.get('.node-course')
      .find('[data="cy-course-description"]')
      .invoke('text');
  });

  it('should display the course video', () => {
    cy.get('.node-course')
      .find('[data="cy-course-video"]')
      .find('iframe')
      .should('be.visible');
  });

  it('should display the course register link', () => {
    cy.get('.node-course')
      .find('[data="cy-course-register-link"]')
      .contains('Register for this course');
  });

  it('should display the external information links', () => {
    cy.get('.node-course').find('[data="cy-course-external-information-links"] a');
  });

  it('should display the course price', () => {
    cy.get('.node-course')
      .find('[data="cy-course-price"]')
      .invoke('text');
  });

  it('should display the topic area', () => {
    cy.get('.node-course')
      .find('[data="cy-course-topic-area"]')
      .invoke('text');
  });

  it('should display the difficulty level', () => {
    cy.get('.node-course')
      .find('[data="cy-course-difficulty-level"]')
      .invoke('text');
  });

  it('should change language to German when the user clicks the German Flag', () => {
    cy.get('li.de')
      .find('.language-link')
      .click({ force: true });
    cy.get('html')
      .invoke('attr', 'lang')
      .should('contain', 'de');
    cy.get('[data="cy-course-language"]').find('span:contains("German")');
  });
});
