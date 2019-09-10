// @Todo: There is a lot of repeatition here which should be made as functions:
// eg: goToCoursesPage()
// cy.visit('/courses') is called multiple times to reset the filter results
// A reset button should be included for the user
describe('Business Training Academy Course Listing Page', () => {
  it('should display the course title and clickable thumbnail', () => {
    cy.visit('/courses');
    cy.get('.views-row:first')
      .find('.views-field-title')
      .find('a')
      .invoke('text')
      .get('.views-row:first')
      .find('.views-field-field-image')
      .find('img')
      .click();
  });

  it('should include a text filter to search for courses', () => {
    cy.visit('/courses')
      .get('.views-exposed-form')
      .find('input[data-drupal-selector="edit-title"]')
      .type('Advanced Business Management')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-submit-course-listing"]')
      .click()
      .get('.views-row-container')
      .find('.views-field-title')
      .contains('Advanced Business Management')
      .should('exist');
  });

  it('should filter by difficulty level', () => {
    cy.visit('/courses')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-field-difficulty-level-target-id"]')
      .select('Advanced')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-submit-course-listing"]')
      .click()
      .get('.views-row-container')
      .find('.views-row')
      .find('.views-field-field-difficulty-level')
      .contains('Advanced')
      .should('exist');
  });

  it('should filter by topic area', () => {
    cy.visit('/courses')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-field-topic-area-target-id"]')
      .select('Innovation')
      .get('.views-row-container')
      .find('.views-row')
      .find('.views-field-field-topic-area')
      .contains('Innovation')
      .should('exist');
  });

  it('should filter by price range', () => {
    cy.visit('/courses')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-field-course-price-value"]')
      .select('101 - 200')
      .get('.views-exposed-form')
      .find('[data-drupal-selector="edit-submit-course-listing"]')
      .click()
      .get('.views-row-container')
      .find('.views-row')
      .find('.views-field-field-course-price')
      .contains('$149.99')
      .should('exist');
  });
});
