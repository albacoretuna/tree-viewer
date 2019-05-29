/**
 * End to end testing using cypress
 * first run the app and then yarn run cypres:open
 */
describe('Testing Tremendous App', function() {
  it('Clicking on show button opens image', function() {
    cy.visit('/');
    cy.contains('Show Image').click();
    cy.get('.Gallery li img').should('have.class', 'Image--is-visible');
  })

  it('Searching for a none-existent tree returns no tree', function() {
    cy.visit('/')
    cy.get('input#search').type('Blah blah tree');
    cy.get('ul.Gallery').find('li').should($li => {
      expect($li).to.have.length(0);
    })
  })
  })
