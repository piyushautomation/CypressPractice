 describe('AssertionTest', () => {
  
  it('Implicit Test', () => {
    cy.visit('https://demo.nopcommerce.com')

    cy.url().should('eq', 'https://demo.nopcommerce.com/')
      .and('contain', 'demo')
      .and('include', 'demo')

    cy.title().should('eq', 'nopCommerce demo store')
      .and('contain', 'demo')

    cy.get("img[alt='nopCommerce demo store']").should('be.visible')
    cy.get("img[alt='nopCommerce demo store']").should('exist')

    cy.xpath("//*[@id='customerCurrency']/option").should('have.length', 2)
  })

  it('Explicit Test', () => {
    cy.visit('https://demo.nopcommerce.com')
    let expected_text = 'Register'

    cy.get(".ico-register").then((x) => {
      let actual_text = x.text()
      expect(expected_text).to.equal(actual_text)

    })

  })

  it('Explicit Test2', () => {
    cy.visit('https://demo.nopcommerce.com')
    let expected_text = 'Register'

    cy.get(".ico-register").then(function(x) {
      let actual_text = x.text()
      expect(expected_text).to.equal(actual_text)

    })

  })

})