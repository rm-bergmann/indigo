describe('Business Training Academy Registration Page', () => {
  it('should allow users to register accounts', () => {
    cy.visit('/user/register');
    cy.get('.content-container')
      .find('[data-drupal-selector="user-register-form"]')
      .should('be.visible');
  });
});

// In order to keep the tests passing once a user has added a course to their wishlist,
// we will have to remove it.
describe('The Registered User', () => {
  it('should be able to add and removes courses from their wishlist, and have access to view other users wishlists', () => {
    cy.login('cypress user', '123456789')
      .visit('/node/2')
      .get('.flag-course-wishlist')
      .find('a')
      .click()
      .visit('/cypress-user')
      .get('.featured-courses')
      .find('.views-field-title:contains("Business Management Basics")')
      .visit('/wishlist')
      .get('.flag-course-wishlist')
      .find('a')
      .click()
      .visit('/users')
      .get('table')
      .find('[href="/cypress-editor"]')
      .click()
      .get('table')
      .find('.views-field-title')
      .find('a')
      .contains('Business Finance for Specialists');
  });
});
