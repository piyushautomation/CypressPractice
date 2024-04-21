describe('LocatorTest', () => {

  it('CSS Selectors Test', () => {
    cy.visit('https://demo.nopcommerce.com')
    cy.title().should('eq', 'nopCommerce demo store')
    cy.get("input#small-searchterms").type("laptop")                    // tag id
    cy.get("button[class='button-1 search-box-button']").click()        // tag attribute
  })


  it('Xpath Test', () => {
    cy.visit('https://demo.nopcommerce.com')
    cy.title().should('eq', 'nopCommerce demo store')
    cy.xpath("//*[@id='small-searchterms']").type("laptop")
    cy.xpath("//*[@id='small-search-box-form']").xpath('button').click()
  })

})